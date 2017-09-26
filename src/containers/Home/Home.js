import React, { Component } from 'react';
import Weather from '../../components/Weather/Weather';

class Home extends Component {
    render () {
        return (
            <div className="home-container">
                <Weather />
            </div>
        )
    }
}

export default Home;