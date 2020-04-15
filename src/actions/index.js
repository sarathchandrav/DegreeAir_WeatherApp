import apiRequest from '../apis/apiRequest'
import axios from 'axios';
export const signInn = () => {

    return {
        type: 'SIGN_IN'
    };
};

export const signOutn = () => {
    return {
        type: 'SIGN_OUT'
    };
};

export const fetchAPI = () => {
    return async dispatch => {
        const responce = await apiRequest.get('/aqi?', { params: { lat: 28.7040590, lon: 77.10249, APPID: 'h1v08vttjgi90hfgrn4o46ooa7' } });
        dispatch({
            type: 'FETCH_API',
            payload: responce.data.data
        });
    }

};



export const fetchSearchCityAPI = (city) => {
    return async dispatch => {
        const responce = await axios.get("https://api.openaq.org/v1/latest?city="+city+"");

        dispatch({
            type: 'FETCH_SEARCH_CITY_API',
            payload: responce.data
        })
    }
}