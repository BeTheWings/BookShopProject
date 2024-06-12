import '../../Main.css';
import Sliders from "../../layout/Sliders";
import React from "react";
import BookList from "./book/BookList";
import NoticeList from "./serviceCenter/notice/NoticeList";
import EventList from "./event/EventList";

function Main() {

    return (
        <div className="App">
            <Sliders></Sliders>
            <div className="ListContainer">
                <BookList></BookList>
            </div>
            <div className="ListContainer">
                <NoticeList></NoticeList>
                <EventList></EventList>
                <h2><a className="removeDecoration" href="/questionAndAnswer">Q&A</a></h2>
            </div>
        </div>
    );
}

export default Main;
