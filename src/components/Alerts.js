import React from 'react';
import { connect } from 'react-redux';

const Alerts = props => {

  return (
    <div className="alerts">
      <h3>Alerts</h3>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    weather: state.weather.weather
  }
}

export default connect(mapStateToProps)(Alerts);