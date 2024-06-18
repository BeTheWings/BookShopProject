import React, {Component, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/sliders.css";
import axios from "axios";

export default class SecondSliders extends Component{
    constructor(props){
        super(props);
        this.state={
            secondSlideList:[],
            loading:true,
    };

    }

    componentDidMount() {
            this.getSecondSliderLIST();
    }

    getSecondSliderLIST = async () => {
        //await 이란?
        try{
            const resp = await axios.get('/info/slideList/');
            const data = resp.data; //데이타에 저장
            this.setState({secondSlideList:data,loading:false});
        }catch(error){
            console.error("Error fetching slideList",error);
            this.setState({loading:true});
        }
    };

    render() {
        const { secondSlideList, loading} = this.state;

        const setting = {
            infinite: true,
            speed: 500, // 슬라이드 전환 속도 설정
            slidesToShow: 3, // 한 번에 보여줄 슬라이드 개수
            slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 개수
            autoplay: true, // 자동 재생 설정
            autoplaySpeed: 10000, // 자동 재생 간격 설정
            cssEase: 'linear', // 부드러운 전환 효과
            pauseOnHover: true, // 마우스 호버 시 일시정지
        };

        return(
            <div className="second-slider-container">
                <Slider {...setting}>
                    {loading ? (
                        <div><h3>이미지 1</h3></div>
                        ) : (
                        secondSlideList.map((secondSlideList) => (
                         <a href={secondSlideList.link} key={secondSlideList.slideId}>
                            <img src={`/${secondSlideList.imgLocation}`} className={secondSlideList.css} alt="Img"/>
                        </a>
                        ))
                    )}
                </Slider>
            </div>
        )

    }

}
