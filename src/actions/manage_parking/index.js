import * as Types from 'action_types/manage_parking'

export function showFormParking() {
    return {
        type: Types.SHOW_FORM_ADD_PARKING,
    }
}
export function cancleFormParking() {
    return {
        type: Types.CANCLE_FORM_ADD_PARKING,
    }
}
export function editFormData(payload) {
    console.log(payload);
    
    return {
        type: Types.EDIT_FORM_DATA,
        payload
    }
}
