import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './img.css';
export default class FSlider extends Component {
    render() {
        const settings = {
            dots: false,
            autoplay: true,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="sliimg">

                    </div>
                    <div className="sliimg2">

                    </div>
                    <div className="sliimg3">

                    </div>
                </Slider>
            </div>
        );
    }
}   