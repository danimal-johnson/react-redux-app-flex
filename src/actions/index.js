import axios from 'axios';
import { API_KEY } from '../key';

export const FETCH_WEATHER_START = 'FETCH_WEATHER_START';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

// Swap the next two lines if you need the Heroku version
// to bypass CORS restrictions:
const proxy = "https://cors-anywhere.herokuapp.com/";
// const proxy = "";

// FIXME: API_KEY should be in process.env file
const BASE_URL=`https://api.darksky.net/forecast/`;
// ${process.env.API_KEY}`;
const lat = 44.05;
const long = -123;

// Async action creator
export const getWeather = () => dispatch => {
  dispatch({type: FETCH_WEATHER_START });

  axios
    .get(proxy + `${BASE_URL}${API_KEY}/${lat},${long}`)
    .then(res => {
      console.log(res);
      console.log("RESPONSE:",res.data)
      dispatch({ type: FETCH_WEATHER_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.error("Cannot get weather. Response:", err);
      dispatch({ type: FETCH_WEATHER_FAILURE, payload: err.response });
    });  
}