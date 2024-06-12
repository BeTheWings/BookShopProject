import React, {useState,useEffect} from 'react';
import axios from 'axios';
import "../../../../css/qna.css";
import Scroll from 'react-infinite-scroll-component';
import InfiniteScroll from "react-infinite-scroll-component";

function QnaList() {
    const [qnaList, setQnaList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasMore,setHasMore] = useState(true);

    const getQnaList = async () => {
        //await 이란?
        try {
            const resp = await axios.get('/info/qnaList');
            const data = resp.data; //데이타에 저장
            if(data.length === 0){
                setHasMore(false);
            }else{
                setQnaList(data);

            }
        } catch (error) {
            console.error("Error fetching bookList", error);
            setLoading(true); // 로딩 상태를 false로 변경
        }finally {
            setLoading(false); // 로딩 상태를 false로 변경
        }
    };

    useEffect(() => {
        getQnaList(); //게시글 목록 조회 함수 호출
    }, []);

    return (
        <InfiniteScroll
            next={getQnaList}
            hasMore={hasMore}
            dataLength={qnaList.length}>
            <div className="Qna">
                {loading ? (<h2>Loading...</h2>)
                    : (<h2>Q&A</h2>)
                }
                {qnaList.map((qnaList) => (
                    <Post title={qnaList.title} content={qnaList.writer} key={qnaList.qnaId}/>
                ))}

            </div>
        </InfiniteScroll>
    )
};

    const Post = ({ title, content,qnaId }) => {
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
