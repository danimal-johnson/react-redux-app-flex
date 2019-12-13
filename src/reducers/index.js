import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';

export const allReducers = combineReducers({
  weather: weatherReducer,
})

export default allReducers;