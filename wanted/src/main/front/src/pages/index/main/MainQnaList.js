import axios from 'axios';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../../../css/noticeList.css";
import "../../../css/Main.css"

function MainQnaList() {
    const [qnaList, setQnaList] = useState([]);
    const [page, setPage] = useState(0);
    const itemsPerPage = 2;

    const getQnaList = async (pageNum) => {
        try {
            const resp = await axios.get('/info/qnaList', {
                params: {
                    page: pageNum,
                    size: itemsPerPage
                }
            });
            setPage((prevPage) => prevPage + 1);
            setQnaList((prevQnaList) => [...prevQnaList, ...resp.data]);
        } catch (error) {
            console.error('Error fetching notices:', error);
        }
    };

    useEffect(() => {
        getQnaList(page);
    }, []);

    return (
        <div className="notice-list-container">
            <h2>Q&A <a className="main-more-link" href="/questionAndAnswer"> 더보기 > </a></h2>

            <ul className="notice-list">
                {qnaList.map((qna,Index) => (
                    <li key={qna.qnaId} className="notice-item">
                        <div className="notice-id">{Index + 1}</div>
                        <div className="notice-info">
                            <span className="notice-category">Q&A | {new Date(qna.date).toLocaleDateString()}</span>
                            <div className="notice-header">
                                <h4 className="notice-title">
                                    <Link className="remove-decoration" to={`/qnaList/${qna.qnaId}`}>{qna.title}</Link>
                                </h4>
                                <span className="notice-author">작성자: {qna.writer}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MainQnaList;
