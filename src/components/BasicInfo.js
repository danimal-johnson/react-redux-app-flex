import React from 'react';
import { connect } from 'react-redux';

const BasicInfo = props => {

  return (
    <div className="basic-info">
      <h3>BasicInfo</h3>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    weather: state.weather.weather
  }
}

export default connect(mapStateToProps)(BasicInfo);