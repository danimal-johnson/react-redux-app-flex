import axios from 'axios';

export const FETCH_WEATHER_START = 'FETCH_WEATHER_START';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

// Swap the next two lines if you need the Heroku version
// to bypass CORS restrictions:
const proxy = "https://cors-anywhere.herokuapp.com/";
// const proxy = "";

// API_KEY is in process.env file
const URL=`https://api.darksky.net/forecast/${process.env.API_KEY}`;
// ${lat},${long}`;

// Async action creator
export const getWeather = () => dispatch => {
  dispatch({type: FETCH_WEATHER_START });
  // axios call
  axios
    .get(proxy + URL)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_WEATHER_SUCCESS, payload: res.data.value});
    })
    .catch(err => {
      console.error("Cannot get weather. Response:", err);
      dispatch({ type: FETCH_WEATHER_FAILURE, payload: err.response });
    });  
}