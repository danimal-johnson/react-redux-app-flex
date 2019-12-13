import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getWeather } from '../actions';
import CurrentWeather from './CurrentWeather.js';

const Weather = props => {
  console.log("WeatherProps:", props);
  return (
    <div className="wrapper">
      <h1>The most important weather. Ever.</h1>
        {
          !props.weather &&
          !props.isFetching &&
          <p>Go ahead. Get started.</p>
        }
        {
          props.isFetching && (
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        )}
        {props.weather &&
          <CurrentWeather />
        }
      <button onClick={props.getWeather}>Get Weather!</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    weather: state.weather.weather,
    isFetching: state.weather.isFetching,
    error: state.weather.error
  };
}

export default connect (mapStateToProps, { getWeather })(Weather);