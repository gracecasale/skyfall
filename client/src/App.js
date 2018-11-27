import React, { Component } from 'react';
import { fetchWeather } from './helpers';
import { getCurrentPosition } from '@blinkmobile/geolocation';
import Loader from 'react-loader-spinner';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {},
      error: null,
      loading: true
    }
  }
  componentDidMount() {
    getCurrentPosition()
      .then(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        return fetchWeather(lat, lon);
      })
      .then(weather => {
        this.setState({
          weather: weather,
          loading: false 
        })
      })
      .catch(err => {
        this.setState({
          error: err,
          loading: false
        });
      });
  }

  isGeoError(err) {
    return err && err.code && err.message;
  } 
  
  render() {
    const { loading, weather, error } = this.state;
    if(loading) {
      return  <Loader type="Oval" color="gray" height={80} width={80} />
    }
    if (error && !this.isGeoError(error)) {
      return <h1>Please try again later...</h1>
    }
     return (
      <div>

        <pre>{JSON.stringify(this.state.weather, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
