import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../image/logo.svg";
import testImg from "../image/test2.jpg"
import "../css/sliders.css";

export default class Sliders extends Component{
    render() {
        const setting={
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            slidesToScroll:1,
            autoplay:true,
            autoplaySpeed:3000,
            cssEase:'ease-in-out'
        };
        return(
            <div className="sliders-container">
                <Slider {...setting}>
                    <div className="slider-item">
                        <a href="/bookList">
                            <img src={logo} className="slider-image" alt="logo"/>
                        </a>
                    </div>
                    <div className="slider-item">
                        <a href="/bookInfo/1">
                            <img src={testImg} className="slider-image-size" alt="testImg"/>
                        </a>
                    </div>
                    <div className="slider-item">
                        <a href="/bookList">
                            <img src={logo} className="slider-image" alt="logo"/>
                        </a>
                    </div>
                </Slider>
            </div>
        )

    }

}
