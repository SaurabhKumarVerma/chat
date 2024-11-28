type TMessage = {
    uuid: string;
    text: string;
    attachments: TMessageAttachment[];
    replyToMessageUuid?: string;
    reactions: TReaction[];
    authorUuid: string;
    sentAt: number;
    updatedAt: number;
};

type TMessageAttachment = {
    uuid: string;
    type: "image";
    url: string;
    width: number;
    height: number;
};

type TReaction = {
    uuid: string;
    participantUuid: string;
    value: string;
};

export type TMessageJSON = Omit<TMessage, "replyToMessageUuid"> & {
    replyToMessage?: Omit<TMessage, "replyToMessageUuid">;
};