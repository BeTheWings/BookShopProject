import React, {Component, useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/sliders.css";
import axios from "axios";
import {Link} from "react-router-dom";

export default class Sliders extends Component{
    constructor(props){
        super(props);
        this.state={
            slideList:[],
            loading:true
        };

    }

    componentDidMount() {
            this.getSlideList();
    }

    getSlideList = async () => {
        //await 이란?
        try{
            const resp = await axios.get('/info/slideList/');
            const data = resp.data; //데이타에 저장
            this.setState({slideList:data,loading:false});
        }catch(error){
            console.error("Error fetching slideList",error);
            this.setState({loading:true});
        }
    };

    render() {
        const { slideList, loading } = this.state;

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
                    {loading ? (
                        <div><h2>Loading</h2></div>
                    ) : (
                        slideList.map((slide) => (
                            <div className="slider-item" key={slide.slideId}>
                                <a href={slide.link}>
                                    <img src={`/${slide.imgLocation}`} className={slide.css} alt="Img"/>
                                </a>
                            </div>
                        ))
                    )}
                </Slider>
            </div>
        )

    }

}
