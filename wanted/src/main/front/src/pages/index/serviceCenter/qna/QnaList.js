import React, {useState,useEffect} from 'react';
import axios from 'axios';
import "../../../../css/qna.css";
import InfiniteScroll from "react-infinite-scroll-component";

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
            console.log(data);
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

                <h3>Q&A</h3>
                <a href="/qnaContent" className="purchase-button">질문하기</a>
                {qnaList.map((qnaItem) => (
                    <Post title={qnaItem.title} content={qnaItem.content} key={qnaItem.qnaId}/>
                ))
                }

            </div>
        </InfiniteScroll>
    )
};

const Post = ({title, content, qnaId}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
            <div className="post">
                <div key={qnaId} className="post-title" onClick={toggleDropdown}>{title}</div>
                {isOpen && (
                    <div className="qna-dropdown-content">
                        <p>{content}</p>
                    </div>
                )}
            </div>
    );
}
export default QnaList;
