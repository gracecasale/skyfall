import React from 'react';
import './CurrentWeather.css';
import cloudyDay from './svg/wi-day-cloudy.svg';

function CurrentWeather(props) {
    const {apparentTemperature} = props.data
    return (
        <section className="cw-container">
        <p className="cw-text">{apparentTemperature}&deg;F</p>
        <img src={cloudyDay} className="cw-icon"/>
        </section>
    )
}

export default CurrentWeather;