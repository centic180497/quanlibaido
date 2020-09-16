import * as types from 'action_types/manage_parking'
const INITIAL_STATE ={
    showformadd:false,
    editFormData:null
}
const reducer_manage_parking = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case types.SHOW_FORM_ADD_PARKING:
            return{
                showformadd:true
            }
        case types.CANCLE_FORM_ADD_PARKING:
            return{
                showformadd:false
            }
        case types.EDIT_FORM_DATA:
            console.log(action)
            return{
                // console.log(action)
               
                showformadd:true,
                editFormData:action.payload
                
            }
        default:
            return state
    }
}
export default reducer_manage_parking