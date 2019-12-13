export const FETCH_WEATHER_START = 'FETCH_WEATHER_START';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

// Async action creator
export const getWeather = () => dispatch => {
  dispatch({type: FETCH_WEATHER_START })
  // axios call
}