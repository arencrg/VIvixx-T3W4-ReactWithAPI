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
      city: "",
      weatherData : [],
      myURL1: "http://api.openweathermap.org/data/2.5/weather?q=",
      myURL2: "&appid=3c50495593ac9632d01ab38da3c87495"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.setState({city: "Enter your city so we can start!"});
    this.setState({weatherData: [{"coord":{"lon":0, "lat":0},
    "weather":[ {"id":0, "main":"No Data Received", "description":"No Data Received", "icon":"x"}],
    "base":"x",
    "main":{"temp":0,"pressure":0,      "humidity":0, "temp_min":0, "temp_max":0, "sea_level":0, "grnd_level":0},
    "wind":{"speed":0,"deg":0},
    "rain":{"3h":0},
    "clouds":{"all":0},
    "dt":0,
    "sys":{"message":0,"country":"No Data", "sunrise":0, "sunset":0},
    "id":0,
    "name":"No Data Received",
    "cod":0} ]
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({city: this.refs.locationName.value});
    var weatherUrl = `${this.state.myURL1}${this.state.city}${this.state.myURL2}`
    fetch(weatherUrl)
      .then(response => response.json())
          .then(data => {
            var newdata = [data];
            this.setState({weatherData: newdata});
            console.log(this.state.weatherData[0].weather);
          })
      .catch(function(err) {
       console.log('Uhhh something went wrong...', err);
      });
  }

    render() {
      return (
        <div>
          <h1>{this.state.city}</h1>
          <p>{this.state.weatherData[0].base}</p>

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
