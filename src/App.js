import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { fetchWeather } from "./fetchWeather.js";

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
      country: "ph",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getWeather(city = this.state.city) {

    const myURL1 = city => "http://api.openweathermap.org/data/2.5/weather?q="
    const myURL2 = "&appid=3c50495593ac9632d01ab38da3c87495"
  //  const weatherUrl = `myURL1{this.state.city},{this.state.country}myURL2`
    const weatherUrl = city => `myURL1{city},{this.state.country}myURL2`

        fetch(weatherUrl(this.state.city))
          .then(response => {
            if (!response.ok) {
              throw Error("Network request failed")
            }

            return response
          })
          .then(d => d.json())
          .then(d => {
            this.setState({
              weatherData: d
            })
          })
      }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({city: this.refs.locationName.value});
    this.getWeather(this.state.city);
  }

    render() {
      return (
        <div>
          <h1>{this.state.city}</h1>
          <h3>Display the weather data (from the api) here</h3>


          <h4>Do you want to try a new city?</h4>
            <form onSubmit={this.handleSubmit}>
                <p>Do you want to try a new city?</p>
                <input className="form-input" ref="locationName" type="text"/>
                <input type="submit" value="Submit" onChange={this.handleSubmit} />
            </form>
        </div>
        )
    }

}
// end of the Weather Component

export default App;
