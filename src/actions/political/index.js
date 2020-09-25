import { Client } from 'client'
import * as actions from './action_political'

export const fetchProvinces = () => {
    return async (dispatch) => {
        dispatch(actions.fetchProvincesRequest())
        let data
        try {
            data = await Client.getProvinces()
        } catch (error) {
            dispatch(actions.fetchProvincesFailed(error))
            return error
        }

        return dispatch(actions.fetchProvincesSuccess(data))
    }
}

export const fetchDistrics = (id) => {
    return async (dispatch) => {
        dispatch(actions.fetchDistrictsRequest())
        let data
        try {
            data = await Client.getDistricts(id)
        } catch (error) {
            dispatch(actions.fetchDistrictsFailed(error))
            console.log('error', error)
            return error
        }

        return dispatch(actions.fetchDistrictsSuccess(data))
    }
}

export const fetchCommunes = (id) => {
    return async (dispatch) => {
        dispatch(actions.fetchCommunesRequest())
        let data
        try {
            data = await Client.getCommunes(id)
        } catch (error) {
            dispatch(actions.fetchCommunesFailed(error))
            return error
        }

        return dispatch(actions.fetchCommunesSuccess(data))
    }
}