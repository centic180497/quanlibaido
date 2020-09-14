const userAgent = () => window.navigator.userAgent

export function isChrome(): boolean {
    return userAgent().indexOf('Chrome') > -1
}

export function isAndroidChrome(): boolean {
    return (
        userAgent().indexOf('Android') !== -1 &&
        userAgent().indexOf('Chrome') !== -1 &&
        userAgent().indexOf('Version') === -1
    )
}

export function isAndroidFirefox(): boolean {
    return (
        userAgent().indexOf('Android') !== -1 &&
        userAgent().indexOf('Firefox') !== -1
    )
}

export function isAndroidWeb(): boolean {
    return isAndroidChrome() || isAndroidFirefox()
}
