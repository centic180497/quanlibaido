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
            console.log("thành công");
            
        }
        catch(err){
            dispatch(actions.addManageParkingFailed(err))
            return err
        }   
        dispatch(actions.addManageParkingSuccess(value))
    }
}