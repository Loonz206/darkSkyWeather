import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render(){
        return (
            <nav id="menu">
                <ul className="left-nav" role="navigation">
                    <li><NavLink exact activeClassName="active" to="/">DarkSkyWeather</NavLink></li>
                    <li className="sr-only"><NavLink exact activeClassName="active" to="#content">Skip Navigation</NavLink></li>
                </ul>
                <ul className="right-nav">
                    {/* All Nav links to Views go here */}
                    <li><NavLink exact activeClassName="active" to="/about">About</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;