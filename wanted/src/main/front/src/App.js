import {Route, Routes} from "react-router-dom";
import BookList from "./pages/index/BookList";
import BookInfo from "./pages/index/BookInfo";
import Main from "./pages/index/Main";
import React from "react";


function App() {

  return (
      <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/bookList" element={<BookList/>}></Route>
          <Route path="/bookInfo/:bookId" element={<BookInfo/>}></Route>
      </Routes>
  );
}

export default App;