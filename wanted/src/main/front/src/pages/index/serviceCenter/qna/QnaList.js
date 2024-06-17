import React, {useState,useEffect} from 'react';
import axios from 'axios';
import "../../../../css/qna.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "./QnaDetail";
function QnaList() {
    const [qnaList, setQnaList] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
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

            if (data.length === 0) {
                setHasMore(false);
            } else {
                setQnaList((prevQnaList) => [...prevQnaList, ...data]);
            }
        } catch (error) {
            console.error("Error fetching qnaList", error);
        }
    };

    useEffect(() => {
        getQnaList(page);
    }, [page]);

    const loadMore = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <InfiniteScroll
            next={loadMore}
            hasMore={hasMore}
            dataLength={qnaList.length}
            loader={<h2>Loading...</h2>}
            endMessage={<p style={{ textAlign: 'center' }}>모든 Q&A를 불러왔습니다.</p>}
        >
            <div className="Qna">
                <h1 className="title">Q&A</h1>
                <nav className="navbar">
                    <ul className="nav-tabs">
                        <li className="nav-item "><a href="/customerCenter">전체</a></li>
                        <li className="nav-item"><a href="/noticeList">공지사항</a></li>
                        <li className="nav-item active"><a href="/questionAndAnswer">질의 응답</a></li>
                    </ul>
                </nav>
                {qnaList.map((qnaItem) => (
                    <Post title={qnaItem.title} content={qnaItem.content} key={qnaItem.qnaId}/>
                ))
                }

                <a href="/qnaContent" className="purchase-button">질문하기</a>

            </div>
        </InfiniteScroll>
    )
};

export default QnaList;
