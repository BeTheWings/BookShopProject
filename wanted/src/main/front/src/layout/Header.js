/* Header.js */
import React from 'react';
import {Link} from "react-router-dom";
import "../css/header.css";
const Header = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">홈</Link></li>
                    <li className="dropdown">
                        <Link to="/bookList">책</Link>
                        <ul className="dropdown-content">
                            <li><Link to="/bookList">소개</Link></li>
                            <li><Link to="/bookPurchase">구매</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/eventList">이벤트</Link></li>
                    <li className="dropdown">
                        <Link to="/customerCenter">고객센터</Link>
                        <ul className="dropdown-content">
                            <li><Link to="/customerCenter">전체</Link></li>
                            <li><Link to="/noticeList">공지사항</Link></li>
                            <li><Link to="/questionAndAnswer">질의응답</Link></li>
                        </ul>
                    </li>
                    <div className="auth-links">
                        <li><Link to="/login" className="small-font bottom-align">로그인</Link></li>
                        <li><Link to="/signup" className="small-font bottom-align">회원가입</Link></li>
                    </div>
                </ul>
            </nav>
        </header>
    );
};

export default Header;