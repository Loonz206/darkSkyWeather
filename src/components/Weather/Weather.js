import React, { Component} from 'react';
import Loader from '../../components/Loader/Loader';
import Day from '../../components/Day/Day';

class Weather extends Component {
    constructor(){
        super();
        this.state = {
            weather: null,
            location: null
        };
        this.getWeather = this.getWeather.bind(this);
        this.getPosition = this.getPosition.bind(this);
    }

    componentWillMount(){
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.getWeather(position.coords.latitude, position.coords.longitude);
                },

                () => {
                    this.setState({
                        error: new Error('The Geolocation service failed'),
                    });
                }
            );
        } else {
            this.setState({
                error: new Error('Your browser does not support geolocation'),
            });
        }
    }

    getPosition() {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        function success(pos){
            // const crd = pos.coords;
            // console.log('Your current position is:');
            // console.log('Lat:', crd.latitude);
            // console.log('Long:', crd.longitude);
            // console.log('More or less ' + crd.accuracy + ' meters');
        }

        function error(err) {
            console.log('error', err);
        }

        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(success, error, options);
        } else {
            console.log('Geolocation not available!');
        }
    }

    getWeather(latitude, longitude) {
        const url = 'api/weather/' + latitude + ',' + longitude;
        return fetch(url)
            .then((response) => response.json())
            .then((data) => {
                //console.log('rest call returned', data);
                const days = data.daily.data;
                return this.setState({
                    weather: {
                        current: data.currently.temperature,
                        currentIcon: data.currently.icon,
                        summary: data.currently.summary,
                        daily: [days[1], days[2], days[3], days[4], days[5]]
                    }
                });
            }).catch((error) => console.log(error));
    }

    //getTodayForecast gets the weather for today
    getTodayForecast() {
        if (this.state.weather !== null) {
            //Get the weather and round out the decimals and display it to the guest
            return <div className="today-forecast-container">
                        <h1>Today's Forecast</h1>
                        <Day weather={this.state.weather} />
                  </div>
        } else {
            //Return the loader
            return <Loader />;
        }
    }

    //get5DayForcast for the week
    get5DayForecast() {
       if (this.state.weather !== null) {
            const list = this.state.weather.daily;
            const area = (
                <div className="five-day-forecast">
                    {list.map((weather, index) =>
                        <Day key={index.toString()} weather={this.state.weather}/>
                    )}
                </div>
            );
            return area;
       }
    }

    render (){
        console.log(this.state.weather);
        return (
            <div>
                <main className="grid-container">
                    { this.getPosition() }
                    { this.getTodayForecast() }
                    { this.get5DayForecast() }
                </main>
            </div>
        )
    }
}

export default Weather;