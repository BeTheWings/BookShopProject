import {Route, Routes} from "react-router-dom";
import BookList from "./pages/index/book/BookList";
import BookInfo from "./pages/index/book/BookInfo";
import EventList from "./pages/index/event/EventList";
import EventInfo from "./pages/index/event/EventInfo";
import NoticeList from "./pages/index/serviceCenter/notice/NoticeList";
import NoticeInfo from "./pages/index/serviceCenter/notice/NoticeInfo";
import QnaList from "./pages/index/serviceCenter/qna/QnaList";
import QnaContent from "./pages/index/serviceCenter/qna/QnaContent";
import CustomerCenter from "./pages/index/serviceCenter/qna/CustomerCenter"

import Main from "./pages/index/Main";
import React from "react";


function App() {

  return (
      <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/bookList" element={<BookList/>}></Route>
          <Route path="/bookInfo/:bookId" element={<BookInfo/>}></Route>
          <Route path="/eventList" element={<EventList/>}></Route>
          <Route path="/eventInfo/:eventId" element={<EventInfo/>}></Route>
          <Route path="/noticeList" element={<NoticeList/>}></Route>
          <Route path="/noticeInfo/:noticeId" element={<NoticeInfo/>}></Route>
          <Route path="/questionAndAnswer" element={<QnaList/>}></Route>
          <Route path="/qnaContent" element={<QnaContent/>}></Route>
          <Route path="/customerCenter" element={<CustomerCenter/>}></Route>
      </Routes>
  );
}

export default App;