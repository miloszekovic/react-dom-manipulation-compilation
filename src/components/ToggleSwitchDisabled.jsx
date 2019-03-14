import React, { Component } from 'react'
import Switch from "react-switch"

export default class ToogleDisabled extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div>
        <p>Disabled style</p>
        <label htmlFor="disabled-switch">
          <Switch
            onChange={() => {}}
            checked
            disabled
            className="react-switch"
            id="disabled-switch"
          />
        </label>
      </div>
    );
  }
}