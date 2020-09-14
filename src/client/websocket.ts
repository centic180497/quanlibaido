import store from 'stores/redux_store'

const MAX_WEBSOCKET_FAILS = 7
const MIN_WEBSOCKET_RETRY_TIME = 3000
const MAX_WEBSOCKET_RETRY_TIME = 30000

export default class WebsocketClient {
    conn?: WebSocket
    connectionUrl: string
    token: string | null
    sequence: number
    connectionFailCount: number
    eventCallback?: Function
    firstConnectCallback?: Function
    reconnectCallback?: Function
    errorCallback?: Function
    closeCallback?: Function
    connectingCallback?: Function
    stop: boolean
    connectionTimeout: any

    constructor() {
        this.connectionUrl = ''
        this.token = null
        this.sequence = 1
        this.connectionFailCount = 0
        this.stop = false
    }

    initialize(
        connectionUrl = this.connectionUrl,
        token: string | null,
        opts?: any,
    ) {
        return new Promise((resolve, reject) => {
            if (this.conn) {
                resolve()
                return
            }

            if (this.connectionUrl === '') {
                console.log(
                    '🔥 [Websocket]  Websocket must have connection url',
                )
                reject(new Error('Websocket must have connection url'))
                return
            }

            this.conn = new WebSocket(connectionUrl)
            this.connectionUrl = connectionUrl
            this.token = token

            this.conn!.onopen = () => {
                if (token) {
                    this.sendMessage('auth', { token })
                }

                if (this.connectionFailCount > 0) {
                    console.log(
                        '🔥 [Websocket] Websocket re-established conneciton',
                    )
                } else if (this.firstConnectCallback) {
                    this.firstConnectCallback()
                }
                this.connectionFailCount = 0
                resolve()
            }

            this.conn!.onclose = () => {
                this.conn = undefined
                this.sequence = 1

                if (this.connectionFailCount === 0) {
                    console.log('🔥 [Websocket] Websocket closed')
                }

                this.connectionFailCount++

                if (this.closeCallback) {
                    this.closeCallback(this.connectionFailCount)
                }

                let retryTime = MIN_WEBSOCKET_RETRY_TIME

                if (this.connectionFailCount > MAX_WEBSOCKET_FAILS) {
                    retryTime =
                        MIN_WEBSOCKET_RETRY_TIME * this.connectionFailCount
                    if (retryTime > MAX_WEBSOCKET_RETRY_TIME) {
                        retryTime = MAX_WEBSOCKET_RETRY_TIME
                    }
                }

                if (this.connectionTimeout) {
                    clearTimeout(this.connectionTimeout)
                }

                this.connectionTimeout = setTimeout(() => {
                    if (this.stop) {
                        clearTimeout(this.connectionTimeout)
                        return
                    }
                    this.initialize(this.connectionUrl, token)
                }, retryTime)
            }

            this.conn!.onerror = (event) => {
                if (this.connectionFailCount <= 1) {
                    console.log('🔥 [Websocket] Websocket error')
                    console.log(event)
                }

                if (this.errorCallback) {
                    this.errorCallback(event)
                }
            }

            this.conn!.onmessage = (event) => {}
        })
    }

    setConnectingCallback(callback: Function) {
        this.connectingCallback = callback
    }

    setEventCallback(callback: Function) {
        this.eventCallback = callback
    }

    setFirstConnectCallback(callback: Function) {
        this.firstConnectCallback = callback
    }

    setReconnectCallback(callback: Function) {
        this.reconnectCallback = callback
    }

    setErrorCallback(callback: Function) {
        this.errorCallback = callback
    }

    setCloseCallback(callback: Function) {
        this.closeCallback = callback
    }

    close(stop = false) {
        this.stop = stop
        this.connectionFailCount = 0
        this.sequence = 1
        if (this.conn && this.conn.readyState === WebSocket.OPEN) {
            this.conn.onclose = () => {}
            this.conn.close()
            this.conn = undefined
            console.log('🔥 [Websocket] Websocket closed')
        }
    }

    sendMessage(action: string, data: any) {}
}
