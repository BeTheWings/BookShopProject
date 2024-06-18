import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import "../../../../css/noticeDetail.css";

function NoticeDetail() {
    const { noticeId } = useParams();
    const [post, setPost] = useState(null);

    const getNoticeDetail = async () => {
        try {
            const response = await axios.get(`/info/noticeList/noticeDetail/`, { params: { noticeId } });
            setPost(response.data);
        } catch (error) {
            console.error('Error fetching post:', error);
        }
    };

    useEffect(() => {
        getNoticeDetail();
    }, [noticeId]);

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="post-detail-container">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
                <span>작성자: {post.writer}</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="post-content">
                {post.content}
            </div>
            <Link to="/noticeList" className="back-button">뒤로가기</Link>
        </div>
    );
}

export default NoticeDetail;
