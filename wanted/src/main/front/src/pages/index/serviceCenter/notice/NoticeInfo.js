import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NoticeDetail from './NoticeDetail';

function NoticeInfo() {
    const { noticeId } = useParams(); // URL 파라미터에서 bookId를 가져옴
    const [loading, setLoading] = useState(true); // 로딩 상태를 관리하는 상태 변수
    const [noticeInfo, setNoticeInfo] = useState(null); // 책 정보를 저장하는 상태 변수

    const getNoticeInfo = async () => {
        try {
            // axios.get()의 결과를 기다림
           // const response = await axios.get(`/bookList/bookInfo/bookId=${bookId}`);
            const response = await axios.get(`/noticeList/noticeInfo`, { params: { noticeId } });
            // response.data에 필요한 데이터가 있음
            const data = response.data;

            // 데이터를 상태에 저장
            setNoticeInfo(data);
            setLoading(false); // 로딩 상태를 false로 변경

        } catch (error) {
            // 에러를 처리
            console.error("Error fetching notice info:", error);
        }
    };

    useEffect(() => {
        getNoticeInfo(); // 컴포넌트가 마운트될 때 getBookInfo 함수 호출
    }, [noticeId]); // bookId가 변경될 때마다 getBookInfo 함수 호출

    return (
        <div>
            {loading ? (
                <h2>Loading...</h2> // 로딩 중일 때 표시할 내용
            ) : (
                noticeInfo && ( // noticeInfo 존재할 때 NoticeDetail 컴포넌트 렌더링
                    <NoticeDetail
                        noticeId={noticeInfo.noticeId}
                        title={noticeInfo.title}
                        description={noticeInfo.description}
                        writer={noticeInfo.writer}
                    />
                )
            )}
        </div>
    );
}

export default NoticeInfo;
