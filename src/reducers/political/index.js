import types from 'action_types/political'

const initialState = {
    provinces: [],
    districts: [],
    communes: [],
    loading: false,
    error: false,
}

const political = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PROVINCES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case types.FETCH_PROVINCES_SUCCESS:
            return {
                ...state,
                loading: false,
                provinces: action.payload,
                error: false,
            }
        case types.FETCH_PROVINCES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case types.FETCH_DISTRICTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case types.FETCH_DISTRICTS_SUCCESS:
            return {
                ...state,
                loading: false,
                districts: action.payload,
                error: false,
            }
        case types.FETCH_DISTRICTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case types.FETCH_COMMUNES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case types.FETCH_COMMUNES_SUCCESS:
            return {
                ...state,
                loading: false,
                communes: action.payload,
                error: false,
            }
        case types.FETCH_COMMUNES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
                // provinces: [],
            }
        case types.CLEAR_PROVINCES:
            return {
                ...state,
                districts: [],
                communes: [],
                loading: false,
                error: false,
            }
        case types.CLEAR_DISTRICTS:
            return {
                ...state,
                communes: [],
                loading: false,
                error: false,
            }
        default:
            return state
    }
}
export default political
