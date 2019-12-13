import {
  FETCH_WEATHER_START,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE } from '../actions'; 

// Initial State

const initialState = {
  city: "Tampa",
  temp: 87
}

// Reducer
export const weatherReducer = (state=initialState, action) => {
  console.log("Reducing:", action.type);
  switch(action.type) {
    case FETCH_WEATHER_START:
      console.log("FETCH START");
      return state;
    case FETCH_WEATHER_SUCCESS:
      console.log("FETCH SUCCESS");
      return state;
    case FETCH_WEATHER_FAILURE:
      console.log("FETCH FAILURE");
      return state;
    default:
      console.log("DEFAULT");
      return state;
  }

}


export default weatherReducer;