import clearDay from './clear-day.svg';
import clearNight from './clear-night.svg';
import cloudy from './cloudy.svg';
import fog from './fog.svg';
import hail from './hail.svg';
import partlyCloudyDay from './partly-cloudy-day.svg';
import partlyCloudyNight from './partly-cloudy-night.svg';
import rain from './rain.svg';
import sleet from './sleet.svg';
import snow from './snow.svg';
import thunderstorm from './thunderstorm.svg';
import tornado from './tornado.svg';
import wind from './wind.svg';

function weatherIcon(icon) {
    if (icon === 'clear-day') {
        return clearDay
    } 
    if (icon === 'clear-night') {
        return clearNight
    }
    if (icon === 'cloudy') {
        return cloudy
    }
    if (icon === 'fog') {
        return fog
    }
    if (icon === 'hail') {
        return hail
    }
    if (icon === 'partly-cloudy-day') {
        return partlyCloudyDay
    }
    if (icon === 'partly-cloudy-night') {
        return partlyCloudyNight
    }
    if (icon === 'rain') {
        return rain
    }
    if (icon === 'sleet') {
        return sleet
    }
    if (icon === 'snow') {
        return snow
    }
    if (icon === 'thunderstorm') {
        return thunderstorm
    }
    if (icon === 'tornado') {
        return tornado
    }
    if (icon === 'wind') {
        return wind
    }
}

export default weatherIcon;