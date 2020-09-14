import {combineReducers} from 'redux'

import { ActionTypes} from 'utils/constants'

function focused(state = true, action) {
    switch(action.type){
        case ActionTypes.BROWSER_CHANGE_FOCUS:
            return action.focus
        default:
            return state
    }
}

export default combineReducers({focused})