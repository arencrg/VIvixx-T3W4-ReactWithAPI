import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <WeatherWeatherLang />
      </div>
    );
  }
}

class WeatherWeatherLang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Manila",
      weatherData : [],
      myURL1: "http://api.openweathermap.org/data/2.5/weather?q=",
      myURL2: "&appid=3c50495593ac9632d01ab38da3c87495"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getWeather(city = this.state.city) {
    const weatherUrl = `${this.state.myURL1}${this.state.city}${this.state.myURL2}`
        fetch(weatherUrl)
          .then(response => {
            if (!response.ok) {throw Error("Network request failed")}
            this.setState({weatherData: response.json()});
            var content = Object.keys(this.state.weatherData).map();
            console.table(content)
          })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({city: this.refs.locationName.value});
    this.getWeather(this.state.city);
  }

    render() {
      const weatherUrl = `${this.state.myURL1}${this.state.city}${this.state.myURL2}`
      return (
        <div>
          <h1>{this.state.city}</h1>
          <p> Data taken from <a href = {weatherUrl} target="_blank">here</a></p>
          <p>Display the weather data (from the api) here (in a pretty little table or something)</p>
          <p>{this.state.weatherData}</p>
              <hr/>
          <p>Do you want to try a new city?</p>
            <form onSubmit={this.handleSubmit}>
                <input className="form-input" ref="locationName" type="text"/>
                <input type="submit" value="Submit" onChange={this.handleSubmit} />
            </form>
        </div>
        )
    }

}

export default App;
