import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../logo.svg";
import "../css/sliders.css";

export default class Sliders extends Component{
    render() {
        const setting={
            dots:false,
            infinite:true,
            speed:500,
            slidesToShow:1,
            slidesToScroll:1,
        };
        return(
            <div className="sliders-container">
                <Slider {...setting}>
                    <div className="slider-item">
                        <img src={logo} className="slider-image" alt="logo"/>
                        <h3>1</h3>
                    </div>
                    <div>
                        <img src={logo} className="slider-image" alt="logo"/>
                        <h3>2</h3>
                    </div>
                    <div>
                        <img src={logo} className="slider-image" alt="logo"/>
                        <h3>3</h3>
                    </div>
                </Slider>
            </div>
        )

    }

}
