import React from 'react';
import './CurrentWeather.css';

function CurrentWeather(props) {
    const {apparentTemperature} = props.data
    return (
        <section className="cw-container">
        <p className="cw-text">{apparentTemperature}&deg;F</p>
        </section>
    )
}

export default CurrentWeather;