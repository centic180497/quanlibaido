import types from 'action_types/political'

export const fetchProvincesRequest = () => {
    return {
        type: types.FETCH_PROVINCES_REQUEST,
    }
}

export const fetchProvincesSuccess = (payload) => {
    return {
        type: types.FETCH_PROVINCES_SUCCESS,
        payload,
    }
}
export const fetchProvincesFailed = (error) => {
    return {
        type: types.FETCH_PROVINCES_FAILED,
        error,
    }
}

export const fetchDistrictsRequest = () => {
    return {
        type: types.FETCH_DISTRICTS_REQUEST,
    }
}

export const fetchDistrictsSuccess = (payload) => {
    return {
        type: types.FETCH_DISTRICTS_SUCCESS,
        payload,
    }
}
export const fetchDistrictsFailed = (error) => {
    return {
        type: types.FETCH_DISTRICTS_FAILED,
        error,
    }
}

export const fetchCommunesRequest = () => {
    return {
        type: types.FETCH_COMMUNES_REQUEST,
    }
}

export const fetchCommunesSuccess = (payload) => {
    return {
        type: types.FETCH_COMMUNES_SUCCESS,
        payload,
    }
}
export const fetchCommunesFailed = (error) => {
    return {
        type: types.FETCH_COMMUNES_FAILED,
        error,
    }
}
export const clearProvince = () => {
    return {
        type: types.CLEAR_PROVINCES,
    }
}
export const clearDistricts = () => {
    return {
        type: types.CLEAR_DISTRICTS,
    }
}


