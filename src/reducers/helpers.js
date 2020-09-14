import { RequestStatus } from 'utils/constants'

export function initialRequestState() {
    return {
        status: RequestStatus.NOT_STARTED,
        error: null,
    }
}

export function handleRequest(REQUEST, SUCCESS, FAILURE, state, action) {
    switch (action.type) {
        case REQUEST:
            return {
                ...state,
                status: RequestStatus.STARTED,
                error: null,
            }
        case SUCCESS:
            return {
                ...state,
                status: RequestStatus.SUCCESS,
                error: null,
            }
        case FAILURE:
            return {
                ...state,
                status: RequestStatus.FAILURE,
                error: action.error,
            }
        default:
            return state
    }
}
