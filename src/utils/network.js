const MAX_NETWORK_RETRIES = 7
const MIN_NETWORK_RETRY_TIME = 3000 // 3 sec
const MAX_NETWORK_RETRY_TIME = 300000 // 5 mins

function handle(callback, online) {
    if (window.requestAnimationFrame) {
        window.requestAnimationFrame(() => callback(online))
    } else {
        setTimeout(() => callback(online), 0)
    }
}
