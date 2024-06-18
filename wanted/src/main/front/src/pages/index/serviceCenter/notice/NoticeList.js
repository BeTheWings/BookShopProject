import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../../../css/noticeList.css"
import {Link} from "react-router-dom";

function NoticeList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('title');
    const [filteredNotices, setFilteredNotices] = useState([]);

    useEffect(() => {
        // 게시물 목록을 가져오는 함수
        const fetchNotices = async () => {
            try {
                const response = await axios.get('/info/noticeList');
                setFilteredNotices(response.data);
            } catch (error) {
                console.error('Error fetching notices:', error);
            }
        };
        fetchNotices();
    }, []);

    // 검색 및 정렬 로직
    const searchNotice = () => {
        const filtered = filteredNotices.filter(notice =>
            searchType === 'writer'
                ? notice.writer.toLowerCase().includes(searchTerm.toLowerCase())
                : notice.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredNotices(filtered);
    };
    const activeEvent=(e)=>{
        if(e.key==='Enter'){
            searchNotice();
        }
    }

    return (
        <div className="notice-list-container">
            <h1 className="title">공지사항</h1>
            <nav className="navbar">
                <ul className="nav-tabs">
                    <li className="nav-item "><a href="/customerCenter">전체</a></li>
                    <li className="nav-item active"><a href="/noticeList">공지사항</a></li>
                    <li className="nav-item"><a href="/questionAndAnswer">질의 응답</a></li>
                </ul>
            </nav>
            <br/>
            <div className="search-sort-bar">
                <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="search-select"
                >
                    <option value="title">제목</option>
                    <option value="writer">작성자</option>
                </select>
                <input
                    type="text"
                    placeholder="검색어를 입력해주세요"
                    value={searchTerm}
                    onKeyDown={(e)=>activeEvent(e)}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <button className="search-button" onClick={searchNotice}>🔍</button>
            </div>
            <ul className="notice-list">
                {filteredNotices.map((notice) => (
                    <li key={notice.noticeId} className="notice-item">
                        <div className="notice-id">{notice.noticeId}</div>
                        <div className="notice-info">
                            <span className="notice-category">공지사항| {new Date(notice.date).toLocaleDateString()}</span>
                            <div className="notice-header">
                                <h4 className="notice-title">
                                    <Link className="remove-decoration" to={`/noticeDetail/${notice.noticeId}`}>{notice.title}</Link>
                                </h4>
                                <span className="notice-author">작성자 : {notice.writer}</span>
                            </div>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NoticeList;
