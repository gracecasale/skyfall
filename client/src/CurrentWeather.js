import React from 'react';
import './CurrentWeather.css';
import weatherIcon from './svg';

function CurrentWeather(props) {
    const { apparentTemperature, summary, precipProbability, humidity, icon } = props.data
    return (
        <section className="cw-container">
            <p className="cw-temp">{apparentTemperature}&deg;F</p>
            <img src={weatherIcon(icon)} alt="icon" className="cw-icon animated infinite pulse delay-2s" />
            <div className="cw-text">
                <p className="cw-text">{summary}</p>
                <p className="cw-text">Precipitation: {precipProbability}%</p>
                <p className="cw-text">Humidity: {humidity * 100}%</p>
            </div>
        </section>
    )
}

export default CurrentWeather;
