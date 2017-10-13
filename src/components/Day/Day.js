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

    getIcon() {
        const condition = '' + this.props.icon;
        switch (condition) {
            case 'clear-night':
                return <img src={night} alt={condition} />;
            case 'rain':
            case 'sleet':
                return <img src={rain} alt={condition} />;
            case 'snow':
                return <img src={snow} alt={condition} />;
            case 'thunderstorm':
                return <img src={storm} alt={condition} />;
            case 'wind':
                return <img src={wind} alt={condition} />;
            case 'fog':
                return <img src={fog} alt={condition} />;
            case 'cloudy':
                return <img src={cloudy} alt={condition} />;
            case 'partly-cloudy-day':
                return <img src={cloudyDay} alt={condition} />;
            case 'partly-cloudy-night':
                return <img src={cloudyNight} alt={condition} />;
            case 'clear-day':
            default:
                return <img src={sun} alt={condition} />;
        }
    }


    render(){
        return (
            <div>
                { this.getIcon() }
            </div>
        )
    }
}

export default Day;