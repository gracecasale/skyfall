import React from 'react';
import './DailyWeather.css';

function DailyWeather(props) {
    const { data } = props.data;
    const firstDay = data[0];
    const {apparentTemperatureMax} = firstDay;
    return (
        <section className="dw-container">
        <h1>The first day forecast: {apparentTemperatureMax}&deg;F</h1>
        </section>
    )
}

export default DailyWeather;