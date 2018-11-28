import React from 'react';
import './CurrentWeather.css';

function CurrentWeather(props) {
    const {apparentTemperature} = props.data
    return (
        <h1 className="current-weather">The temperature is currently: {apparentTemperature}&deg;F</h1>
    )
}

export default CurrentWeather;