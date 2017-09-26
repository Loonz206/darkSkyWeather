import React, { Component } from 'react';
import sun from '../../assets/sun.svg';
import night from '../../assets/night.svg';
import rain from '../../assets/rain.svg';
import snow from '../../assets/snow.svg';
import wind from '../../assets/wind.svg';
import fog from '../../assets/fog.svg';
import storm from '../../assets/storm.svg';
import cloudy from '../../assets/cloudy.svg';
import cloudyDay from '../../assets/cloudyday.svg';
import cloudyNight from '../../assets/cloudynight.svg';

class Day extends Component {
    displayDate(){
        var d = new Date();
        return this.dayOfWeek(d.getDay() + this.props.num);
    }
    dayOfWeek(day) {
        return ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'][day%7];
    }
    getIcon(){
        let condition = '' + this.props.icon;
        switch (condition){
            case 'clear-night':
                return <img src={night} alt={condition} />;
            case 'rain':
                return <img src={rain} alt={condition} />;
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
            <div className="day">
                { this.getIcon() }
                <p>{ this.displayDate() }</p>
                <p><span className="max">{ Math.round(this.props.max)}˚</span> / <span className="min">{ Math.round(this.props.min)}˚</span></p>
            </div>
        )
    }
}

export default Day;
