import React from 'react';
import './HourlyWeather.css';

const singleHour = hour =>
    <p key={hour.time} className="hw-container-item">
        Temperature: {hour.apparentTemperature}&deg;F
     Time: {new Date(hour.time * 1000).toString()} {/*DarkySky returns time in seconds, JS dates are assumed to be in miliseconds. Multiplying allows these two units to match*/}
    </p>

function HourlyWeather(props) {
    const { data } = props.data;
    const hours = data.filter((hour,index) => new Date(1000 * hour.time).getHours() % 6 === 0).slice(0,4)
    const items = hours
        .map(singleHour)
    return (
        <div >
            <div className="hw-container">{items}</div>
        </div>
    )
}

export default HourlyWeather;