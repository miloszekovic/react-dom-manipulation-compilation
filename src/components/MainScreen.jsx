import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import '../assets/css/style.min.css'
import NavBar from './NavBar'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Message from './Message'

class MainScreen extends Component {
  render() {
    return (
      <Router>
        <div id="main--screen">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/message" component={Message} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MainScreen