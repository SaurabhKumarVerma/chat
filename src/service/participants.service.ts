import { TParticipant } from "@chat/types/participants.type"
import apiService from "./api/api"


export const allParticipantsService = async (): Promise<TParticipant[] | []> => {
    try {
        const participantsList = await apiService.get<TParticipant[]>('/participants/all')
        return participantsList
    } catch (error) {
        return []
    }
}