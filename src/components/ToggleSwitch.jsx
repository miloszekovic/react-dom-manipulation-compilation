import React, { Component } from 'react'
import Switch from "react-switch"

export default class ToogleBasic extends Component {
  constructor() {
    super();
    this.state = { checked: false, };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div>
        <p>Default style</p>
        <label htmlFor="normal-switch">
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            className="react-switch"
            id="normal-switch"
          />
        </label>
        <p>The switch is <span>{this.state.checked ? 'on' : 'off'}</span>.</p>
      </div>
    );
  }
}