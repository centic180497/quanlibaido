import * as types from 'action_types/manage_parking'
const INITIAL_STATE = {
    showformadd: false,
    editFormData: null,
    idEditForm: -1,
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
            return {
                ...state,
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
            return {
                ...state,
                isEditingParking: true,
                showformadd: true,
                editFormData: action.payload,
                idEditForm: action.payload.id,
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
            return {
                ...state,
                editFormData: {
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

        default:
            return state
    }
}
export default reducer_manage_parking
