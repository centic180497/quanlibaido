import * as types from 'action_types/manage_parking'
const INITIAL_STATE = {
    manageParking: [],
    loading: false,
    showformadd: false,
    editFormData: null,
    idEditForm: null,
    err: null,
    isAddingParking: false,
    isEditingParking: false,
    zoom: 13,
    isAdding: {
        lat: null,
        lng: null,
    },
    infowindow: -1,
    openAlert: false,
}
const reducer_manage_parking = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SHOW_FORM_ADD_PARKING:
            return {
                ...state,
                showformadd: true,
                isAddingParking: true,
            }
        case types.CANCLE_FORM_ADD_PARKING:
            console.log(action, 'action')
            return {
                ...state,
                manageParking: action.payload ? [] : state.manageParking,
                showformadd: false,
                isAddingParking: false,
                isEditingParking: false,
                editFormData: null,
                idEditForm: -1,
                isAdding: {
                    lat: null,
                    lng: null,
                },
                zoom: 13,
                infowindow: -1,
            }
        case types.EDIT_FORM_DATA:
            console.log(action.payload._id)

            return {
                ...state,
                isEditingParking: true,
                showformadd: true,
                editFormData: action.payload,
                idEditForm: action.payload._id,
                zoom: 18,
            }
        case types.IS_ADDING_PARKING:
            return {
                ...state,
                isAdding: {
                    lat: action.lat,
                    lng: action.lng,
                },
            }
        case types.IS_EDITTING_PARKING:
            console.log('action', action)

            return {
                ...state,
                editFormData: {
                    ...state.editFormData,
                    lat: action.lat,
                    lng: action.lng,
                },
            }
        case types.SHOW_INFOWINDOW:
            return {
                ...state,
                infowindow: action.payload,
            }
        case types.CANCLE_INFOWINDOW:
            return {
                ...state,
                infowindow: -1,
            }
        case types.MANAGE_PARKING.GET_MANAGE_PARKING_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.MANAGE_PARKING.GET_MANAGE_PARKING_SUCCESS:
            console.log(action)

            return {
                ...state,
                loading: false,
                manageParking: action.data,
            }
        case types.MANAGE_PARKING.ADD_MANAGE_PARKING_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.MANAGE_PARKING.ADD_MANAGE_PARKING_SUCCESS:
            let newManaParking = [...state.manageParking, action.data]
            return {
                ...state,
                loading: false,
                manageParking: newManaParking,
            }
        case types.MANAGE_PARKING.ADD_MANAGE_PARKING_FAILED:
            return {
                ...state,
                loading: false,
                err: action.err,
            }
        case types.MANAGE_PARKING.DELETE_MANAGE_PARKING_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.MANAGE_PARKING.DELETE_MANAGE_PARKING_SUCCESS:
            console.log(action)

            // let id = state.manageParking.findIndex((data) => data._id === action.id)
            // console.log(id, 'index')
            // state.manageParking.splice(id)
            let newManageParking = state.manageParking.filter((index) => index.id !== action.id)
            return {
                ...state,
                loading: false,
                manageParking: newManageParking,
            }
        case types.MANAGE_PARKING.DELETE_MANAGE_PARKING_FAILED:
            return {
                ...state,
                loading: false,
                err: action.err,
            }

        case types.MANAGE_PARKING.GET_EDIT_MANAGE_PARKING_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case types.MANAGE_PARKING.GET_EDIT_MANAGE_PARKING_SUCCESS:
            
            return {
                ...state,
                loading: false,
                    isEditingParking: true,
                    showformadd: true,
                    editFormData: action.data,
                    idEditForm: action.data.id,
                    zoom: 18,
            }
        case types.MANAGE_PARKING.GET_EDIT_MANAGE_PARKING_FAILED:
            return {
                ...state,
                loading: true,
                err: action.err,
            }

        case types.MANAGE_PARKING.EDIT_MANAGE_PARKING_REQUEST:
            return {
                ...state,
                loading: true,
                err: action.err,
            }
        case types.MANAGE_PARKING.EDIT_MANAGE_PARKING_SUCCESS:
            console.log(action)

            let index = state.manageParking.findIndex((data) => data.id === action.id)
            state.manageParking[index] = action.param
            return {
                ...state,
                loading: false,
                manageParking: [...state.manageParking],
                
            }
        case types.MANAGE_PARKING.EDIT_MANAGE_PARKING_FAILED:
            return {
                ...state,
                loading: false,
                err: action.err,
            }
        default:
            return state
    }
}
export default reducer_manage_parking
