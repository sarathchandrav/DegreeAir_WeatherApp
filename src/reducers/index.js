import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducers from './authReducers';
import airQualityReducers from './AirQualityReducers';
import citySearchReducer from './citySearchReducer';

export default combineReducers({
    auth: authReducers,
    airQuality:airQualityReducers,
    form: formReducer,
    cityAirQuality: citySearchReducer
});