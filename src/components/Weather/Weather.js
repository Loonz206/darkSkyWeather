import React, { Component} from 'react';
import Loader from '../../components/Loader/Loader';

class Weather extends Component {
    constructor(){
        super();
        this.state = {
            summary: "",
            forecast:  [],
            currently: {},
            loading: true
        };
        this.getWeather = this.getWeather.bind(this);
    }
    getWeather() {
        const url = 'api/weather/47.6227156713256,-122.360553979498';

        return fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log('rest call returned');
                return this.setState({
                    summary: data.daily.summary,
                    forecast: data.daily.data,
                    currently: data.currently,
                    loading: false
                });
            })
            .catch((error) => console.log(error));
    }
    componentDidMount() {
        this.getWeather();
    }
    render (){
        const loading = this.state.loading ? <Loader /> : "";
        return (
            <div>
                { loading }
            </div>
        )
    }
}

export default Weather;