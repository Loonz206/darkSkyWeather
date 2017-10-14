import React, { Component} from 'react';
import Loader from '../../components/Loader/Loader';
import Day from '../../components/Day/Day';

class Weather extends Component {
    constructor(){
        super();
        this.state = { weather: null };
        this.getWeather = this.getWeather.bind(this);
    }



    getWeather() {
        const url = 'api/weather/47.6227156713256,-122.360553979498';

        return fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log('rest call returned', data);
                const days = data.daily.data;
                return this.setState({
                    weather: {
                        current: data.currently.temperature,
                        currentIcon: data.currently.icon,
                        summary: data.currently.summary,
                        daily: [days[1], days[2], days[3], days[4], days[5]]
                    }
                });
            })
            .catch((error) => console.log(error));
    }

    //getTodayForecast gets the weather for today
    getTodayForecast() {
        if (this.state.weather !== null) {
            //Get the weather and round out the decimals and display it to the guest
            return <div className="weather-temp-container">
                        <h1>Today's Forecast</h1>
                        <Day weather={this.state.weather}/>
                        <p className="weather-temp">{ Math.round(this.state.weather.current) + '˚' }</p>
                        <p>{ this.state.weather.summary }</p>
                    </div>;
        } else {
            //Return the loader
            return <Loader />;
        }
    }

    componentWillMount(){
        this.getWeather();
    }

    render (){
        return (
            <div>
                <main className="grid-container">
                    { this.getTodayForecast() }
                </main>
            </div>
        )
    }
}

export default Weather;