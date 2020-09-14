import { Options } from 'types/client'

const HEADER_AUTH = 'Authorization'
const HEADER_BEARER = 'BEARER'

export default class Client {
    token = ''
    url = ''
    urlVersion = '/api/v4'
    defaultHeaders: { [x: string]: string } = {}
    userId = ''
    userRole?: string

    getUrl() {
        return this.url
    }

    setUrl(url: string) {
        this.url = url
    }

    getUrlVersion() {
        return this.urlVersion
    }

    getToken() {
        return this.token
    }

    setToken(token: string) {
        this.token = token
    }

    setUserId(userId: string) {
        this.userId = userId
    }

    setUserRole(userRole: string) {
        this.userRole = userRole
    }

    getBaseRoute(){
        return `${this.url}${this.urlVersion}`
    }

    getUsersRoute(){
        return `${this.getBaseRoute()}/users`
    }

    getParkingRoute(){
        return `${this.getBaseRoute()}/parking`
    }

    getNoParkingRoute(){
        return `${this.getBaseRoute()}/no_parking`
    }

    getOptions(options: Options) {
        const headers: { [x: string]: string } = {
            ...this.defaultHeaders,
        }
        
        return { ...headers }
    }

    login = (username: string, password: string) => {

    }

    logout = () => {}

    doFetch = (url: string , options: Options) => {

    }
    
    
}
