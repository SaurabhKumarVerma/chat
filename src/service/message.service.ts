import { ISendMessage } from "../interface/message.interface"
import { TMessage, TMessageJSON } from "../types/message.type"
import apiService from "./api/api"

export const messageListService = async (): Promise<TMessage[] | []> => {
    try {
        const response = await apiService.get<TMessage[]>('/messages/all')
        return response
    } catch (error) {
        return []
    }
}

export const sendMessageService = async (message: string):Promise<ISendMessage | null> => {
    try {
        const response = await apiService.post('/messages/new', {text: message})
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

export const fetchLatestMessage = async (date: Date): Promise<TMessageJSON[] | []> => {
    try {
        const response = await apiService.get<TMessageJSON[]>(`/messages/updates/${date}`)
        return response
    } catch (error) {
        return []
    }
}
