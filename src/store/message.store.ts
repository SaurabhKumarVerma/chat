import { immer } from 'zustand/middleware/immer';
import { create } from 'zustand';
import { IMessage } from '@chat/interface/message.interface';
import { messageListService } from '@chat/service/message.service';
import apiService from '@chat/service/api/api';
import { TMessageJSON } from '@chat/types/message.type';

const initialState: Omit<IMessage, 'fetchMessage'> = {
    messageList: [],
    isLoading: false,
    error: false,
};

const useMessageStore = create<IMessage>()(
    immer((set) => ({
        ...initialState,

        fetchMessage: async () => {
            set((state) => {
                state.isLoading = true;
            });
            try {
                const response = await messageListService();
                set((state) => {
                    state.messageList = response;
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
    }))
);

export default useMessageStore;
