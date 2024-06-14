import React, { useState } from 'react';
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";

function QnaContents() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [password, setPassword] = useState('');
    const [writer,setWriter] = useState('');
    const [items, setItems] = useState(Array.from({ length: 20 }));

    const handleSubmit = (event) => {
        event.preventDefault();
       const data ={
           Title : title,
           Content : content,
           Password : password,
           Writer : writer
       }

       axios.post('/info/qnaContent/',data)
            .then(response=>{
                alert("질문이 성공적으로 등록되었습니다.");
                window.location.href='/questionAndAnswer';
            });
    };

    const fetchMoreData = () => {
        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 20 })));
        }, 1500);
    };

    const handleReset = () => {
        setTitle('');
        setContent('');
        setPassword('');
        setWriter('');
    };

    return (

            <div className="form-container">
                <h1>Q&A</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">제목:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">본문:</label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            className="content-text-area"
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="writer">이름:</label>
                        <input
                            type="text"
                            id="writer"
                            value={writer}
                            onChange={(e) => setWriter(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">비밀번호:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-buttons">
                        <button type="submit">등록</button>
                        <button type="button" onClick={handleReset}>취소</button>
                    </div>
                </form>
                <InfiniteScroll
                    dataLength={items.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                </InfiniteScroll>
            </div>
    );
}

export default QnaContents;
