import React, { Component } from 'react'
import Slider from 'react-slick'

class SimpleSlider extends Component {

  render() {
    var settings = {
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrow: true,
      autoplay: true,
      dots: true
    };
    return (
    <Slider {...settings}>
        <div>
            <h3>1</h3>
        </div>
        <div>
            <h3>2</h3>
        </div>
        <div>
            <h3>3</h3>
        </div>
        <div>
            <h3>4</h3>
        </div>
        <div>
            <h3>5</h3>
        </div>
        <div>
            <h3>6</h3>
        </div>
    </Slider>
    );
  }

}

export default SimpleSlider