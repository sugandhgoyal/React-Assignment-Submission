import {homeAction} from "../index";

import {FETCH_CONVERT_DATA,FETCH_DATA} from '../../constants/api';

import {getCallApi} from '../../utils/utils';

/**
 * Async action to load random data for website
 * @param {string} loadingType 
 * @param {number} skip 
 */
export const loadDataApi = (loadingType, skip) => {
    if (loadingType === 'firstLoad') {
        console.log("first");
        return (dispatch) => {
            dispatch(homeAction.load_data());
            return getCallApi(FETCH_DATA).then((data) => {
                console.log(data.slice(0, skip));
                dispatch(homeAction.load_data_success(data));
                return Promise.resolve(data);
            }).catch((error) => {
                dispatch(homeAction.load_data_error(error));
                return Promise.reject(error);
            })
        }
    }
    if (loadingType === 'lazyLoad') {
        return (dispatch) => {
            dispatch(homeAction.async_lazy_loading_activated());
            return getCallApi(FETCH_DATA).then((data) => {
                console.log("lazyload", data.slice(0, skip));
                dispatch(homeAction.async_lazy_loading_success(data.slice(0, skip)));
                return Promise.resolve(data);
            }).catch((error) => {
                dispatch(homeAction.async_lazy_loading_error(error));
                return Promise.reject(error);
            })
        }
    }
}

/**
 * Async action to convert one currency to another
 * @param {string} scurr - source currency
 * @param {string} dcurr - destination currency
 * @param {number} samount - source amount
 */
export const convertApiCall = (scurr,dcurr,samount) => {
    console.log(scurr,samount,dcurr);
    return (dispatch) => {
        dispatch(homeAction.data_convert());
        return getCallApi(FETCH_CONVERT_DATA(scurr,dcurr,samount)).then((data) => {
            console.log(data);
            dispatch(homeAction.data_convert_success(data));
            return Promise.resolve(data);
        }).catch((error) => {
            dispatch(homeAction.data_convert_error(error));
            return Promise.reject(error);
        })
    }
}
