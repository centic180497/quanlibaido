import * as types from 'action_types/manage_parking'
const INITIAL_STATE = {
    showformadd: false,
    editFormData: null,
    isAddingParking: false,
    isEditingParking: false,
    isEditing: {
        lat: null,
        lng: null,
    },
    isAdding: {
        lat: null,
        lng: null,
    },
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
                isEditing: {
                    lat: null,
                    lng: null,
                },
                isAdding: {
                    lat: null,
                    lng: null,
                },
            }
        case types.EDIT_FORM_DATA:
            return {
                ...state,
                isEditingParking: true,
                showformadd: true,
                editFormData: action.payload,
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
                isEditing: {
                    lat: action.lat,
                    lng: action.lng,
                },
            }

        default:
            return state
    }
}
export default reducer_manage_parking
