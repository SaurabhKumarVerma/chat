import { TParticipant } from "@chat/types/participants.type";

export interface IParticipant {
    participantList: TParticipant[]
    isLoading: boolean
    isError: boolean
    fetchParticipant: () => Promise<void>
}