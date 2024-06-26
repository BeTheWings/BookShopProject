import "../../../../css/customerCenter.css";
import React, { useState, useEffect } from "react";
import Post from "./QnaDetail";
import axios from "axios";
import { Link } from "react-router-dom";

function CustomerCenter() {
    const [noticeList, setNoticeList] = useState([]);
    const [qnaList, setQnaList] = useState([]);
    const [page, setPage] = useState(0);
    const itemsPerPage = 6;

    const getQnaList = async (pageNum) => {
        try {
            const resp = await axios.get('/info/qnaList', {
                params: {
                    page: pageNum,
                    size: itemsPerPage
                }
            });
            const data = resp.data;
            console.log(data);
            setQnaList((prevQnaList) => [...prevQnaList, ...data]);
        } catch (error) {
            console.error("Error fetching qnaList", error);
        }
    };

    const getNoticeList = async () => {
        try {
            const resp = await axios.get('/info/noticeList');
            setNoticeList(resp.data);
        } catch (error) {
            console.error("Error fetching noticeList", error);
        }
    };

    useEffect(() => {
        getQnaList(page);
        getNoticeList();
    }, [page]);

    return (
            <div className="customerCenter">

                <h1 className="title">고객센터</h1>
                <nav className="navbar">
                    <ul className="nav-tabs">
                        <li className="nav-item active"><a href="#">전체</a></li>
                        <li className="nav-item"><a href="/noticeList">공지사항</a></li>
                        <li className="nav-item"><a href="/questionAndAnswer">질의 응답</a></li>
                    </ul>
                </nav>
                <div className="Qna">
                    <h1>무엇을 도와드릴까요?<br/>
                        에스라 출판사 고객 센터입니다.
                    </h1>
                    <br/>
                    <h3>공지사항<a className="more-link" href="/noticeList">더보기 ></a></h3>
                    <ul className="notice-list">
                        {noticeList.map((notice) => (
                            <li key={notice.noticeId} className="notice-item">
                                <div className="notice-id">{notice.noticeId}</div>
                                <div className="notice-info">
                                    <span
                                        className="notice-category">공지사항| {new Date(notice.date).toLocaleDateString()}</span>
                                    <div className="notice-header">
                                        <h4 className="notice-title">
                                            <Link className="remove-decoration"
                                                  to={`/noticeInfo/${notice.noticeId}`}>{notice.title}</Link>
                                        </h4>
                                        <span className="notice-author">작성자 : {notice.writer}</span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <h3>질의응답<a className="more-link" href="/questionAndAnswer">더보기 ></a></h3>
                    {qnaList.map((qnaItem) => (
                        <Post title={qnaItem.title} content={qnaItem.content} key={qnaItem.qnaId}/>
                    ))}
                    <br/>
                </div>
            </div>
    );
}

export default CustomerCenter;
