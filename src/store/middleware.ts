import thunk, { ThunkMiddleware } from 'redux-thunk'

export function createMiddleware(): ThunkMiddleware[] {
    const middleware: ThunkMiddleware[] = []

    middleware.push(thunk)
    
    return middleware
}
