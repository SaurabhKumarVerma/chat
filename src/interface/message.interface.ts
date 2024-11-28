import { TMessageJSON } from "@chat/types/message.type";


export interface IMessage {
    messageList: Array<TMessageJSON>
    isLoading: boolean
    error: boolean
    fetchMessage: () => Promise<void>
}


export interface ISendMessage {
    uuid: string
    text: string
    attachments: any[]
    sentAt: number
    updatedAt: number
    authorUuid: string
    reactions: any[]
}