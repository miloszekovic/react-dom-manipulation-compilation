import React, { Component } from 'react'

import Home from './components/Home'

import './styles/App.scss'

class App extends Component {
  render() {
    return (
      <div className="main--app--screen">
        <Home />
      </div>
    );
  }
}

export default App