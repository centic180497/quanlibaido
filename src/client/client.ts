import { Options } from 'types/client'
import axios from 'axios'

const HEADER_AUTH = 'Authorization'
const HEADER_BEARER = 'BEARER'

export default class Client {
    token = ''
    url = 'http://10.49.46.251:9003'
    urlVersion = '/api/v1'
    defaultHeaders: { [x: string]: string } = {}
    userId = ''
    userRole?: string
    urlparking='https://blog-api-linh.herokuapp.com'

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

    getBaseRoute() {
        return `${this.url}${this.urlVersion}`
    }
    //apifake
    getBaseRouteparking(){
        return `${this.urlparking}${this.urlVersion}`
    }
    //

    getUsersRoute() {
        return `${this.getBaseRoute()}/users`
    }

    getParkingRoute() {
        return `${this.getBaseRouteparking()}/parking`
    }

    getNoParkingRoute() {
        return `${this.getBaseRoute()}/no_parking`
    }

    getPolitical() {
        return `${this.getBaseRoute()}/political`
    }

    getOptions(options: Options) {
        // const headers: { [x: string]: string } = {
        //     ...this.defaultHeaders,
        // }

        // return { ...headers }

        const newOptions = { ...options }
        let headers = { ...this.defaultHeaders }

        if (options.headers) {
            headers = { ...headers, ...options.headers }
        }

        if (this.token) {
            headers[HEADER_AUTH] = `${HEADER_BEARER} ${this.token}`
        }

        return { ...newOptions, headers }
    }

    login = (username: string, password: string) => {}

    logout = () => {}

    getProvinces = async () => {
        const { data } = await this.doFetchWithResponse(`${this.getPolitical()}/provinces`, { method: 'get', data: {} })
        return data
    }
    getManageParking= async()=>{
        const {data}= await this.doFetchWithResponse(`${this.getParkingRoute()}`,{method:'get',data:{}})
        return data
    }
    addManageParking= async(value:object)=>{
        console.log(value);
        const {data}= await this.doFetchWithResponse(`${this.getParkingRoute()}`,{method:'post',data:{...value
        }})
        console.log(data);
        return data

        
    }

    getDistricts = async (id:number) => {
        const { data } = await this.doFetchWithResponse(`${this.getPolitical()}/districts?province=${id}`, { method: 'get', data: {} })
        return data
    }

    getCommunes = async (id:string) => {
        const { data } = await this.doFetchWithResponse(`${this.getPolitical()}/communes?district=${id}`, { method: 'get', data: {} })
        return data
    }

    // doFetch = async (url: string, options: Options) => {
    //     const { data } = await this.doFetchWithResponse(url, options)
    // }

    doFetchWithResponse = async (url: string, options: Options) => {
        try {
            const response = await axios({ url: url, ...this.getOptions(options) })
            const { data, headers } = response
            return { data, headers }
        } catch (error) {
            throw error.response?.data?.data
        }
    }
}