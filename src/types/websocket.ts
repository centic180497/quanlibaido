export type WebsocketMessage<T> = {
    event: string
    data: T
    seq: number
}