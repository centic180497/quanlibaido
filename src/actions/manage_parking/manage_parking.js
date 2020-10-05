import { Client } from 'client'
import * as actions from './index.js'

export const fetchManageParking =()=>{
    return async (dispatch)=>{
        dispatch(actions.getParkingRequest())
        let data
        try{
            data=await Client.getManageParking()
            console.log("dâtta",data);
            
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
            dispatch(actions.GeteditManageParkingFailed(err))
            return err
        }   
        dispatch(actions.deleteManageParkingSuccess(id))
    }
}
export const editManageParking=(param, id)=>{
    console.log("param",param);
    console.log("id",id);
    
    
    return async (dispatch)=>{
        dispatch(actions.editManageParkingRequest())
        let data 
        try{
            data =await Client.editManageParking(param, id)
            console.log(data,"editdatat");
            
        }
        catch(err){
            dispatch(actions.editManageParkingFailed(err))
            console.log(err);
            return err
            
        }   

        console.log(param)
        param['id'] = id
        dispatch(actions.editManageParkingSuccess(id, param))
    }
}
export const getEditManageParking =(id)=>{
    return async (dispatch)=>{
        dispatch(actions.GeteditManageParkingRequest())
        let data
        try{
            data=await Client.GeteditManageParking(id)
            console.log("dâtta",data);
            
        }catch(err){
            dispatch(actions.GeteditManageParkingFailed(err))
            return err
        }
        dispatch(actions.GeteditManageParkingSuccess(data))
    }
}