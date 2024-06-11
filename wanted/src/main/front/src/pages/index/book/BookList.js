//상태와 effect란?
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import  "../../../Main.css";

function BookList() {
    const [bookList,setBookList] = useState([]);
    const [loading,setLoading] = useState(true);
    const getBookList = async () => {
        //await 이란?
        try{
            const resp = await axios.get('/bookList/');
            const data = resp.data; //데이타에 저장
            setBookList(data); // 받아온 정보를 BookList에 저장
            setLoading(false); // 로딩 상태를 false로 변경
            }catch(error){
            console.error("Error fetching bookList",error);
            setLoading(true); // 로딩 상태를 false로 변경
        }
    };

    useEffect(()=>{
        getBookList(); //게시글 목록 조회 함수 호출
    },[]);

    return(
        <div>
            <ul>
                {loading ? (<h2>Loading...</h2>)
                    :(<h2>책 추후 이미지 + 책제목</h2>)
                }
                {bookList.map((board)=> (
                    <li className="noDot" key={board.bookId}>
                        <Link to={`/bookInfo/${board.bookId}`}>{board.title} {board.bookId}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
