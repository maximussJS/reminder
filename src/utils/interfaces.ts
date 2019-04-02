export interface ITelegramMessage {
    chat: {
        id: string
        username: string
    }
    text: string
}

export interface IRemind {
    id: number
    text: string
    chat_id: number
    time: Date
}
