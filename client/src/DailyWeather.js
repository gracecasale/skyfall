import React from 'react';

function DailyWeather(props) {
    const { data } = props.data;
    const firstDay = data[0];
    const {apparentTemperatureMax} = firstDay;
    return (
        <h1>The first day forecast: {apparentTemperatureMax}&deg;F</h1>
    )
}

export default DailyWeather;