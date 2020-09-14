import { Method } from 'axios'

export type Options = {
    headers?: { [x: string]: string }
    method?: Method
    url?: string
    data?: any
}
