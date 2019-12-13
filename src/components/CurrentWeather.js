import React from 'react';
import { connect } from 'react-redux';
import BasicInfo from './BasicInfo';
import Summaries from './Summaries';
import Alerts from './Alerts';

const CurrentWeather = props => {
  return (
    <div className="current-weather">
      <h2>Location: Lat: {props.weather.latitude},
      Long: {props.weather.longitude} </h2>
      <div className="billboards">
        <BasicInfo />
        <Summaries />
      </div>
      <Alerts />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    weather: state.weather.weather
  }
}

export default connect(mapStateToProps)(CurrentWeather)
