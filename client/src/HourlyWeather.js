import React from 'react';
import './HourlyWeather.css';
import format from 'date-fns/format'

const singleHour = hour =>
    <div className="hw-bands">
        <p key={hour.time} className="hw-container-item">
            Date {"&"} Time: {format(new Date(hour.time * 1000), "MM/DD/YYYY h:mm aa")} {/*DarkySky returns time in seconds, JS dates are assumed to be in miliseconds. Multiplying allows these two units to match*/}
        </p>
        <p className="hw-temp">
            {hour.apparentTemperature}&deg;F
        </p>
    </div>

function HourlyWeather(props) {
    const { data } = props.data;
    const hours = data.filter((hour, index) => new Date(1000 * hour.time).getHours() % 6 === 0).slice(0, 4)
    const items = hours
        .map(singleHour)
    return (
        <div >
            <div className="hw-container">{items}</div>
        </div>
    )
}

export default HourlyWeather; 