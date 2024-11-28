import { TMessageJSON } from "@chat/types/message.type"
import apiService from "./api/api"
import { ISendMessage } from "@chat/interface/message.interface"

export const messageListService = async (): Promise<TMessageJSON[] | []> => {
    try {
        const response = await apiService.get<TMessageJSON[]>('/messages/all')
        return response
    } catch (error) {
        return []
    }
}

export const sendMessageService = async (message: string):Promise<ISendMessage | null> => {
    try {
        const response = await apiService.post('/messages/new', {data: message})
        return response as unknown as ISendMessage
    } catch (error) {
        return null
    }
}

export const latestMessageService = async (): Promise<TMessageJSON[] | []> => {
    try {
        const latestMessage = await apiService.get<TMessageJSON[]>('/messages/latest')
        return latestMessage
    } catch (error) {
        return []
    }
}
