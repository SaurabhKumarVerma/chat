import { IParticipant } from "@chat/interface/participant.interface";
import { allParticipantsService } from "@chat/service/participants.service";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";


const initialState: Omit<IParticipant, 'fetchParticipant'> = {
    participantList: [],
    isLoading: false,
    isError: false
}
const useParticipantStore = create<IParticipant>()(
    immer((set) => ({
        ...initialState,

        fetchParticipant: async () => {
            set((state) => {
                state.isLoading = true;
            });
            try {
                const response = await allParticipantsService();
                set((state) => {
                    state.participantList = response;
                    state.isError = false;
                });
            } catch (error: any) {
                set((state) => {
                    state.isError = true;
                });
            } finally {
                set((state) => {
                    state.isLoading = false;
                });
            }
        },
    }))
);

export default useParticipantStore

