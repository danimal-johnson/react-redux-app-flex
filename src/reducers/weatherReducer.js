import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE } from '../actions'; 

// Initial State

const initialState = {
  weather: null,
  isFetching: false,
  error: ""
}

// Reducer
export const weatherReducer = (state=initialState, action) => {
  console.log("Reducing:", action.type);
  switch(action.type) {
    case FETCH_WEATHER_START:
      console.log("FETCH START");
      return {
        ...state,
        isFetching: true
      };
    case FETCH_WEATHER_SUCCESS:
      console.log("FETCH SUCCESS");
      console.log("Payload:", action.payload);
      return {
        ...state,
        weather: action.payload,
        isFetching: false,
        error: ''
      };
    case FETCH_WEATHER_FAILURE:
      console.log("FETCH FAILURE");
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      console.log("DEFAULT");
      return state;
  }

}


export default weatherReducer;