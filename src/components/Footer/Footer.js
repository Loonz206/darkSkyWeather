import React, { Component } from 'react';

class Footer extends Component {
    render () {
        return (
            <footer>
                <p className="center">Built with React | Copyright 1980-{this.props.date.getFullYear()} ©</p>
            </footer>
        )
    }
}

export default Footer;