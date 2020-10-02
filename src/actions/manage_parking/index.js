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
export function editingParking(lat,lng){
    return{
        type:Types.IS_EDITTING_PARKING,
        lat,
        lng
    }
}
export function addingParking(lat,lng){
    return{
        type:Types.IS_ADDING_PARKING,
        lat,
        lng
    }
}
export function showInfowindow(id){
    return{
        type:Types.SHOW_INFOWINDOW,
        payload:id
    }
}
export function cancleInforwindow(){
    return{
        type:Types.CANCLE_INFOWINDOW
    }
}
export function getParkingRequest(){
    return{
        type:Types.MANAGE_PARKING.GET_MANAGE_PARKING_REQUEST
    }
}
export function getParkingSuccess(data){
    return{
        type:Types.MANAGE_PARKING.GET_MANAGE_PARKING_SUCCESS,
        data
    }
}
export function getParkingFailed(err){
    return{
        type:Types.MANAGE_PARKING.GET_MANEGE_PARKING_FAILED,
        err
    }
}
export function addManageParkingRequest(data){
    return{
        type:Types.MANAGE_PARKING.ADD_MANAGE_PARKING_REQUEST,
        data
    }
}
export function addManageParkingSuccess(data){
    return{
        type:Types.MANAGE_PARKING.ADD_MANAGE_PARKING_SUCCESS,
        data
    }
}
export function addManageParkingFailed(err){
    return{
        type:Types.MANAGE_PARKING.ADD_MANAGE_PARKING_FAILED,
        err
    }
}
export function deleteManageParkingRequest(){
    return{
        type:Types.MANAGE_PARKING.DELETE_MANAGE_PARKING_REQUEST,
        
    }
}
export function deleteManageParkingSuccess(id){
    return{
        type:Types.MANAGE_PARKING.DELETE_MANAGE_PARKING_SUCCESS,
        id
    }
}
export function deleteManageParkingFailed(err){
    return{
        type:Types.MANAGE_PARKING.DELETE_MANAGE_PARKING_FAILED,
        err
    }
}
export function editManageParkingRequest(){
    return{
        type:Types.MANAGE_PARKING.EDIT_MANAGE_PARKING_REQUEST
        
    }
}
export function editManageParkingSuccess(id,param){
    return{
        type:Types.MANAGE_PARKING.EDIT_MANAGE_PARKING_SUCCESS,
        id,
        param
    }
}
export function editManageParkingFailed(err){
    return{
        type:Types.MANAGE_PARKING.EDIT_MANAGE_PARKING_FAILED,
        err
    }
}
