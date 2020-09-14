import * as redux from 'redux'
import { createMiddleware } from './middleware'
const windowAny = window as any
const composeEnhancers =
    windowAny.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose

export default function configureServiceStore(
    preloadedState: any,
    appReducer: any,
) {
    const middleware = createMiddleware()

    const store = redux.createStore(
        appReducer,
        preloadedState,
        composeEnhancers(redux.applyMiddleware(...middleware)),
    )

    return store
}
