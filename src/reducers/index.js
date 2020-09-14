import {combineReducers} from 'redux'

import camera from './cameras'
import users from './users'
import violation from './violations'

import modals from './views/modals'
import browser from './views/browser'
import navigation from './views/navigation'

export default combineReducers({
    camera,
    users,
    violation,

    modals,
    browser,
    navigation
})