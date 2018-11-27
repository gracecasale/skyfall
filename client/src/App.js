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
      loading: true,
      lat: '',
      lon: ''
    }
    this.updateWeather = this.updateWeather.bind(this);
  }
  updateWeather(e) {
    e.preventDefault();
    const { lat, lon } = this.state;
    fetchWeather(lat, lon)
      .then(weather => { 
        this.setState({
          weather: weather
        })
      })
      .catch(err => { 
        this.setState ({
          error: err
        })
      });
  }
  componentDidMount() {
    getCurrentPosition()
      .then(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.setState({
          lat: lat,
          lon: lon
        });
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
    const { loading, weather, error, lat, lon } = this.state;
    if (loading) {
      return <Loader type="Oval" color="gray" height={80} width={80} />
    }
    if (error && !this.isGeoError(error)) {
      return <h1>Please try again later...</h1>
    }
    return (
      <div>
        <form onSubmit={this.updateWeather}>
          <input type="number" value={lat}
            onChange={e => this.setState({ lat: e.target.value })} placeholder="Latitude: " 
            required
            min="-90"
            max="90"
            />
          <input type="number" value={lon}
            onChange={e => this.setState({ lon: e.target.value })} placeholder="Longitude: " 
            required
            min="-90"
            max="90"/>
          <button type="submit">Go!</button>
        </form>
        <pre>{JSON.stringify(weather, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
