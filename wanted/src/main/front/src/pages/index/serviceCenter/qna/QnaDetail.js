import React, {useState} from "react";

const QnaDetail = ({title, content, qnaId}) => {
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
export default QnaDetail;