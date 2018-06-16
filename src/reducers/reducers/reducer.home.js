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

var _ = {
    union: require('lodash/union')
};

const initialState = {
    state: {},
    data: [],
    more_data:[],
    result:0,
    has_more_items: false,
    error: null
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state
            }
        case LOAD_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                error: false
            }
        case LOAD_DATA_ERROR:
            return {
                ...state,
                error: true
            }
        case DATA_CONVERT:
            return {
                ...state
            }
        case DATA_CONVERT_SUCCESS:
            return {
                ...state,
                result:action.convert_data.result,
                error: false
            }
        case DATA_CONVERT_ERROR:
            return {
                ...state,
                error: true
            }
        case LAZY_LOADER_ACTIVATED:
            return {
                ...state,
                has_more_items: true
            }
        case LAZY_LOADER_SUCCESS:
            return {
                ...state,
                data: _.union(state.data, action.more_data),
                has_more_items: false,
                error: false
            }
        case LAZY_LOADER_ERROR:
            return {
                ...state,
                has_more_items: false,
                error: true
            }
        default:
            return {
                ...state
            }
    }
}