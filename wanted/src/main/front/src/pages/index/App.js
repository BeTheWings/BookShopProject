import {Route, Routes} from "react-router-dom";
import BookList from "./book/BookList";
import BookInfo from "./book/BookInfo";
import EventList from "./event/EventList";
import EventInfo from "./event/EventInfo";
import NoticeList from "./serviceCenter/notice/NoticeList";
import NoticeDetail from "./serviceCenter/notice/NoticeDetail";
import QnaList from "./serviceCenter/qna/QnaList";
import QnaContent from "./serviceCenter/qna/QnaContent";
import CustomerCenter from "./serviceCenter/qna/CustomerCenter"

import Main from "./Main";
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
          <Route path="/noticeDetail/:noticeId" element={<NoticeDetail/>}></Route>
          <Route path="/questionAndAnswer" element={<QnaList/>}></Route>
          <Route path="/qnaContent" element={<QnaContent/>}></Route>
          <Route path="/customerCenter" element={<CustomerCenter/>}></Route>
      </Routes>
  );
}

export default App;