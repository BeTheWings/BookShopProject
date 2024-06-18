import '../../css/Main.css';
import Sliders from "../../layout/Sliders";
import React,{useState,useEffect} from "react";
import NoticeList from "./main/MainNoticeList";
import EventList from "./event/EventList";
import SecondSlider from "../../layout/SecondSliders"
import QnaList from "./main/MainQnaList";

function Main() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="App">
            <Sliders></Sliders>
            <SecondSlider></SecondSlider>
            <div className="ListContainer">
                <NoticeList></NoticeList>
                <EventList></EventList>
                <QnaList></QnaList>
            </div>
        </div>
    );


}
export default Main;
