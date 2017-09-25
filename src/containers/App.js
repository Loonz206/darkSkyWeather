import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import Home from '../containers/Home/Home';
import NotFound from '../containers/NotFound/NotFound';

class App extends Component {
  constructor(){
    super();
    this.state = {
      condition: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    this.setState({
       condition: !this.state.condition
    });
  }
  componentDidMount(){
    let body = document.body;
    body.classList.add('js');
  }
  render() {
    return (
        <Router>
          <div className="app-container">
            <div className={this.state.condition ? 'wrap active' : 'wrap'} id="wrap">
              <header>
                <a href="#menu" className={this.state.condition ? 'menu-link active' : 'menu-link'} onClick={this.handleClick}>
                  Menu &#9776;
                </a>
                <Nav/>
              </header>
                {/* All Views for the guts go in here, using state class components */}
              <main className="main" id="content">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route component={NotFound}/>
                </Switch>
              </main>
              <Footer date={new Date()}/>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
