import '../../Main.css';
import Sliders from "../../layout/Sliders";
import React,{useState,useEffect} from "react";
import NoticeList from "./serviceCenter/notice/NoticeList";
import EventList from "./event/EventList";
import SecondSlider from "../../layout/SecondSliders"

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
                <h2><a className="removeDecoration" href="/questionAndAnswer">Q&A</a></h2>
            </div>
        </div>
    );


}
export default Main;
