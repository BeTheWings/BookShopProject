import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
//자체 css로 변경필요
//페이지네이션 1 2 3 4 표현 필요
// 서버작업필요
import  "../../../../Main.css";

function BookList() {
    const [noticeList,setNoticeList] = useState([]);
    const [loading,setLoading] = useState(true);
    const getNoticeList = async () => {
        //await 이란?
        try{
            const resp = await axios.get('/info/bookList/');
            const data = resp.data; //데이타에 저장
            setNoticeList(data); // 받아온 정보를 BookList에 저장
            setLoading(false); // 로딩 상태를 false로 변경
            }catch(error){
            console.error("Error fetching bookList",error);
            setLoading(true); // 로딩 상태를 false로 변경
        }
    };

    useEffect(()=>{
        getNoticeList(); //게시글 목록 조회 함수 호출
    },[]);

    return(
        <div>
            <h1 className="title">공지사항</h1>
            <nav className="navbar">
                <ul className="nav-tabs">
                    <li className="nav-item "><a href="/customerCenter">전체</a></li>
                    <li className="nav-item active"><a href="#">공지사항</a></li>
                    <li className="nav-item "><a href="/questionAndAnswer">질의 응답</a></li>
                </ul>
            </nav>
            <ul>
                {noticeList.map((board) => (
                    <li className="noDot" key={board.bookId}>
                        <Link to={`/bookInfo/${board.bookId}`}>{board.title} {board.bookId}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
