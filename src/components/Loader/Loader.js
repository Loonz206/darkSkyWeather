import React, { Component } from 'react';
import loaderfront from '../../assets/loaderfront.svg';


class Loader extends Component {
    //Create a loader while all of the stuff is going when loading up.
    render() {
        return <div className="loader-container">
                <p>Loading data...</p>
                <img src={loaderfront} className="loader-pulse" alt="Loading..." />
            </div>;
    }
}

export default Loader;