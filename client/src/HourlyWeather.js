import React from 'react';
import './HourlyWeather.css';


const singleHour = hour =>
    <p key={hour.time}>
        Temperature: {hour.apparentTemperature}&deg;F
     Time: {new Date(hour.time * 1000).toString()} {/*DarkySky returns time in seconds, JS dates are assumed to be in miliseconds. Multiplying allows these two units to match*/}
    </p>

function HourlyWeather(props) {
    const { data } = props.data;
    const threeHours = data.slice(0, 3);
    const items = threeHours
        .map(singleHour)
    return (
        <div className="hw-container">
            {items}
        </div>
    )
}

export default HourlyWeather;