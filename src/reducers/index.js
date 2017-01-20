import { combineReducers } from 'redux';
import {FETCH_WEATHER} from '../actions/index'

function reducerForecast(state = [], action){
	switch (action.type){
		case FETCH_WEATHER:
			return [action.payload.data, ...state]
		default:
			return state;
	}
}

const rootReducer = combineReducers({reducerForecast});

export default rootReducer;
