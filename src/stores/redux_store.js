import configureServiceStore from 'store'
import appReducer from 'reducers'

function configureStore() {
    return configureServiceStore({}, appReducer)
}

const store = configureStore()

if (process.env.NODE_ENV !== 'production') {
    //eslint-disable-line no-process-env
    window.store = store
}

export default store
