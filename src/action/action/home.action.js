import {
    LOAD_DATA,
    LOAD_DATA_SUCCESS,
    LOAD_DATA_ERROR,
    DATA_CONVERT,
    DATA_CONVERT_ERROR,
    DATA_CONVERT_SUCCESS,
    LAZY_LOADER_ACTIVATED,
    LAZY_LOADER_ERROR,
    LAZY_LOADER_SUCCESS
} from '../../constants/index';

const load_data = () => ({type: LOAD_DATA});

const load_data_success = (data) => ({type: LOAD_DATA_SUCCESS, data: data})

const load_data_error = (err) => ({type: LOAD_DATA_ERROR, err})

const data_convert = () => ({type: DATA_CONVERT});

const data_convert_success = (data) => ({type: DATA_CONVERT_SUCCESS, convert_data: data})

const data_convert_error = (err) => ({type: DATA_CONVERT_ERROR, err})

const async_lazy_loading_activated = () => {
    return {type: LAZY_LOADER_ACTIVATED}
}

const async_lazy_loading_success = (data) => {
    return {type: LAZY_LOADER_SUCCESS, more_data: data}
}

const async_lazy_loading_error = (error) => {
    return {type: LAZY_LOADER_ERROR, error}
};

export default {
    load_data,
    load_data_error,
    load_data_success,
    data_convert,
    data_convert_error,
    data_convert_success,
    async_lazy_loading_activated,
    async_lazy_loading_error,
    async_lazy_loading_success
}