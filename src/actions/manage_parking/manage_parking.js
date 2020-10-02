import { Client } from 'client'
import * as actions from './index'

export const fetchManageParking =()=>{
    return async (dispatch)=>{
        dispatch(actions.getParkingRequest())
        let data
        try{
            data=await Client.getManageParking()
        }catch(err){
            dispatch(actions.getParkingFailed(err))
            return err
        }
        dispatch(actions.getParkingSuccess(data))
    }
}
export const addManageParking=(value)=>{
    
    return async (dispatch)=>{
        dispatch(actions.addManageParkingRequest())
        let data 
        try{
            data =await Client.addManageParking(value)
        }
        catch(err){
            dispatch(actions.addManageParkingFailed(err))
            return err
        }   
        dispatch(actions.addManageParkingSuccess(data))
    }
}
export const deleteManageParking=(id)=>{
    console.log(id, 'id')
    
    return async (dispatch)=>{
        dispatch(actions.deleteManageParkingRequest())
        let data 
        try{
            data =await Client.deleteManageParking(id)
            console.log("id",);
            
            
        }
        catch(err){
            dispatch(actions.deleteManageParkingFailed(err))
            return err
        }   
        dispatch(actions.deleteManageParkingSuccess(id))
    }
}
export const editManageParking=(param, id)=>{
    return async (dispatch)=>{
        dispatch(actions.deleteManageParkingRequest())
        let data 
        try{
            data =await Client.editManageParking(param, id)
            console.log(data);
            
        }
        catch(err){
            dispatch(actions.editManageParkingFailed(err))
            return err
        }   

        console.log(param)
        param['_id'] = data._id
        dispatch(actions.editManageParkingSuccess(data._id, param))
    }
}