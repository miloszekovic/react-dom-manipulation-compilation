import React, { Component } from 'react'
import Switch from "react-switch"

import ToggleContentBox from './ToggleContentBox'

export default class ToogleWithContent extends Component {
  constructor() {
    super();
    this.state = { 
      checked: false,
      show: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });

    const { show } = this.state;
    this.setState( { show : !show } )
  }

  render() {
    return (
      <div>
        <p>Toggle with Content</p>
        <label htmlFor="normal-switch">
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            className="react-switch"
            id="normal-switch"
          />
        </label>
        { this.state.show && <ToggleContentBox /> /* ili neki obican string = 'nesto' */ }
      </div>
    );
  }
}