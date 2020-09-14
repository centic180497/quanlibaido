import configServiceStore from './configureStore.dev'

const config = process.env.NODE_ENV === 'production' ? configServiceStore : configServiceStore

export default config