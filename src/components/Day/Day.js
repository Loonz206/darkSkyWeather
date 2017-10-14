import React, { Component } from 'react';
import cloudyDay from '../../assets/cloudyday.svg';
import cloudyNight from '../../assets/cloudynight.svg';
import cloudy from '../../assets/cloudy.svg';
import fog from '../../assets/fog.svg';
import night from '../../assets/night.svg';
import rain from '../../assets/rain.svg';
import snow from '../../assets/snow.svg';
import storm from '../../assets/storm.svg';
import sun from '../../assets/sun.svg';
import wind from '../../assets/wind.svg';

class Day extends Component {

    displayDate(){
        const d = new Date();
        return this.dayOfWeek(d.getDay() + this.props.weather.num);
    }

    dayOfWeek(day) {
        return ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'][day%7];
    }

    getIcon() {
        const condition = '' + this.props.weather.currentIcon;
        switch (condition) {
            case 'clear-night':
                return <img src={night} alt={condition} className="weather-icon" />;
            case 'rain':
            case 'sleet':
                return <img src={rain} alt={condition} className="weather-icon" />;
            case 'snow':
                return <img src={snow} alt={condition} className="weather-icon"/>;
            case 'thunderstorm':
                return <img src={storm} alt={condition} className="weather-icon" />;
            case 'wind':
                return <img src={wind} alt={condition} className="weather-icon" />;
            case 'fog':
                return <img src={fog} alt={condition} className="weather-icon" />;
            case 'cloudy':
                return <img src={cloudy} alt={condition} className="weather-icon" />;
            case 'partly-cloudy-day':
                return <img src={cloudyDay} alt={condition} className="weather-icon" />;
            case 'partly-cloudy-night':
                return <img src={cloudyNight} alt={condition} className="weather-icon" />;
            case 'clear-day':
                return <img src={sun} alt={condition} className="weather-icon" />;
            default:
                return <img src={sun} alt={condition} className="weather-icon" />;
        }
    }


    render(){
        return (
            <div className="weather-icon-container">
                { this.getIcon() }
                <p>{ this.displayDate() }</p>
            </div>
    )
    }
}

export default Day;