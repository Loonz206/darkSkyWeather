import React, { Component } from 'react';
import axios from 'axios';

class Zipcode extends Component {
    componentWillMount(){
        this.setState({
            value: ''
        });
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            value: e.target.value
        });
        if(this.state.value === 4 && !isNaN(this.state.value)){
            console.log('Getting location...');
            this.getLocationFromZip(e.target.value);
        }
    }
    getLocationFromZip(zip){
        let self = this;
        axios({
            url:'https://crossorigin.me/http://ziplocate.us/api/v1/' + zip,
            method: 'get',
            responseType: 'json'
        })
            .then(function(response){
                self.props.onValueChange([response.data.lat, response.data.lng]);
                console.log('Location obtained');
            })
            .catch(function(response){
               console.log(response);
            });
    }
    render(){
        return <div className="zip">
            <hr/>
            <label htmlFor="zipcode" className="sr-only">Zipcode</label>
            <br/>
            <input type="number" required maxLength="5" value={this.state.value} onChange={this.handleChange} placeholder="Enter Zip Code"/>
        </div>;
    }
}

export default Zipcode;