import { combineReducers } from 'redux'

import { ActionTypes } from 'utils/constants'

const initialState = {
    blocked: false,
    onNavigationConfirmed: null,
    showNavigationPrompt: false,
}

function navigationBlock(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({ navigationBlock })
