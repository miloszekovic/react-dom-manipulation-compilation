import React, { Component } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
 
export default class VolumeSlider extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      volume: 20
    }
  }
 
  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
  }
 
  render() {
    let { volume } = this.state
    var settings = {
      value: volume,
      min: 10,
      max: 110,
      orientation: 'horizontal',
      onChange: this.handleOnChange
    };
    return (
      <Slider {...settings} />
    )
  }

}