import { immer } from 'zustand/middleware/immer';
import { create } from 'zustand';
import { IMessage } from '../interface/message.interface';
import { fetchLatestMessage, messageListService, sendMessageService } from '../service/message.service';
import { allParticipantsService } from '../service/participants.service';
import { POLLING_INTERVAL } from '../constant/constant';

const initialState: Omit<IMessage, 'fetchMessage' | 'handleTextInput' | 'sendMessage' | 'message' | 'startPolling' | 'stopPolling' | 'fetchUpdatedMessages' | 'lastUpdateTime'> = {
    messageList: [],
    isLoading: false,
    error: false,
};



const useMessageStore = create<IMessage>()(
    immer((set, get) => ({
        ...initialState,
        message: '',
        lastUpdateTime: Date.now(),

        fetchMessage: async () => {
            set((state) => {
                state.isLoading = true;
            });

            try {
                const response = await messageListService();
                const participantList = await allParticipantsService();
                const participantListMap = new Map(participantList.map((user: { uuid: any }) => [user.uuid, user]));
                const updatedMessageList = response.map((message: { authorUuid: string }) => {
                    const user = participantListMap.get(message.authorUuid);

                    return user
                        ? { ...message, name: user?.name, avatarUrl: user?.avatarUrl }
                        : message;
                });
                set((state) => {
                    state.messageList = updatedMessageList;
                    state.error = false;
                });
            } catch (error: any) {
                console.error('Error fetching messages:', error.message);
                set((state) => {
                    state.error = true;
                });
            } finally {
                set((state) => {
                    state.isLoading = false;
                });
            }
        },

        fetchUpdatedMessages: async () => {
            const lastUpdateTime = get().lastUpdateTime;
            try {
                const response = await fetchLatestMessage(lastUpdateTime)
                const participantList = await allParticipantsService();
                const participantListMap = new Map(participantList.map((user: { uuid: any }) => [user.uuid, user]));
                const updatedMessageList = response.map((message: { authorUuid: string }) => {
                    const user = participantListMap.get(message.authorUuid);

                    return user
                        ? { ...message, name: user?.name, avatarUrl: user?.avatarUrl }
                        : message;
                });

                if (response?.length > 0) {
                    set((state) => {
                        state.messageList.push(...updatedMessageList);
                        state.lastUpdateTime = Date.now();
                    });
                }
            } catch (error: any) {
                console.error('Error fetching updated messages:', error.message);
            }
        },

        startPolling: () => {
            const intervalId = setInterval(() => {
                get().fetchUpdatedMessages();
            }, POLLING_INTERVAL);

            set((state) => {
                (state as any).pollingIntervalId = intervalId;
            });
        },

        stopPolling: () => {
            const intervalId = (get() as any).pollingIntervalId;
            if (intervalId) {
                clearInterval(intervalId);
                set((state) => {
                    (state as any).pollingIntervalId = null;
                });
            }
        },

        handleTextInput: (value: string) => {
            set({ message: value });
        },

        sendMessage: async () => {
            try {
                const getUserMsg = get().message;
                const response = await sendMessageService(getUserMsg);

                set((state) => {
                    state.messageList.push(response);
                    state.message = '';
                });

                console.log('Message sent successfully:', response);
            } catch (error: any) {
                console.error('Error sending message:', error.message);
            }
        },
    }))
);

export default useMessageStore;
