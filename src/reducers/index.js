import {combineReducers} from 'redux'

import camera from './cameras'
import users from './users'
import violation from './violations'
import manageparking from './manage_parking'

import modals from './views/modals'
import browser from './views/browser'
import navigation from './views/navigation'

export default combineReducers({
    camera,
    users,
    violation,
    manageparking,

    modals,
    browser,
    navigation
})