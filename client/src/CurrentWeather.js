import React from 'react';
import './CurrentWeather.css';
import cloudyDay from './svg/wi-day-cloudy.svg';

function CurrentWeather(props) {
    const { apparentTemperature, summary, precipProbability, humidity } = props.data
    return (
        <section className="cw-container">
            <p className="cw-temp">{apparentTemperature}&deg;F</p>
            <img src={cloudyDay} alt="icon" className="cw-icon" />
            <div className="cw-text">
                <p className="cw-text">{summary}</p>
                <p className="cw-text">Precipitation: {precipProbability}%</p>
                <p className="cw-text">Humidity: {humidity}%</p>
            </div>
        </section>
    )
}

export default CurrentWeather;
