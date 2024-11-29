import { TMessage } from "../types/message.type"



export interface IMessage {
    messageList: Array<TMessage>
    isLoading: boolean
    error: boolean
    fetchMessage: () => Promise<void>
    message?: string;
    handleTextInput?: (val: any) => void;
    sendMessage?: () => Promise<void>
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