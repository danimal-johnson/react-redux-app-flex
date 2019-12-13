import React from 'react';
import { connect } from 'react-redux';

const Summaries = props => {

  return (
    <div className="summaries">
      <h3>Summaries</h3>
  <p>{props.weather.minutely.summary}</p>
  <p>{props.weather.hourly.summary}</p>
  <p>{props.weather.daily.summary}</p>
  
    </div>
  );
}

const mapStateToProps = state => {
  return {
    weather: state.weather.weather
  }
}

export default connect(mapStateToProps)(Summaries);