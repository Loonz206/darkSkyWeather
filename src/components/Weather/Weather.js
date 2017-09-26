import React, { Component } from 'react';
import axios from 'axios';
import Day from '../../components/Day/Day';
import Loader from '../../components/Loader/Loader';
import Location from '../../components/Location/Location';

class Weather extends Component {
    constructor () {
        super();
        this.state = { weather: null };
        this.getWeather = this.getWeather.bind(this);
    }

    getWeather(location){
        const self = this;
        axios({
            url: '/api/weather/' + location[0] + ',' + location[1],
            method: 'get',
            responseType: 'json'
        })
        .then(function(response) {
            const d = response.data;
            const days = d.daily.data;
            self.setState({
                weather: {
                    'current': d.currently.temperature,
                    'summary': d.hourly.summary,
                    'daily': [days[1], days[2], days[3], days[4], days[5]]
                }
            });
        })
        .catch(function(response){
            console.log(response);
        });
    }

    getTodayForecast(){
        if(this.state.weather !== null){
            return <div className="weather-temp-container">
                    <h1>Today</h1>
                    <div className="weather-temp">{Math.round(this.state.weather.current) + '˚'}</div>
                   </div>
        }else {
            return <Loader/>
        }
    }

    /*
    get5DayForecast for the weather. Create the array then get the dayData and for each push them into the days array
    getting the min and max values for the days and increment them by 1
     */
    get5DayForecast() {
        if (this.state.weather !== null) {
            const days = [];
            const dayData = this.state.weather.daily;
            for(let i = 0; i < dayData.length; i++) {
                days.push(<Day icon={dayData[i].icon} min={dayData[i].temperatureMin} max={dayData[i].temperatureMax} num={i} key={'day'+i}/>);
            }
            return <div className="weather-forecast">
                {days}
            </div>;
        }
    }

    render () {
        return (
            <div>
                { this.getTodayForecast() }
                { this.get5DayForecast() }
                <Location weather={this.getWeather()} />
            </div>
        )
    }
}

export default Weather;