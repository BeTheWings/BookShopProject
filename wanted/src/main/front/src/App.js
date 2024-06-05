import {Route, Routes} from "react-router-dom";
import BookList from "./pages/index/BookList";
import Main from "./pages/index/Main";
import React from "react";


function App() {

  return (
      <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/bookList" element={<BookList/>}></Route>
      </Routes>
  );
}

export default App;