import React, { Component } from 'react'
import Slider from 'react-slick'

class SimpleSlider2 extends Component {

  render() {
    var settings = {
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 2,
      arrow: true,
      autoplay: true,
      dots: false
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

export default SimpleSlider2