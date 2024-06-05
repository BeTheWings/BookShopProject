//상태와 effect란?
import React, {useState,useEffect} from 'react';
import axios from 'axios';

function BookList() {
    const [bookList,setBookList] = useState([]);

    const getBookList = async () => {
        //await 이란?
        const resp = await axios.get('/bookList/').then(resp=>{
            console.log(resp.data);
            setBookList(resp.data);
        });
    }

   /* function getBookList(){
    axios.get('/bookList/').then(response=>{
        console.log(response.data);
        setBookList(response.data);

    })
}*/

    useEffect(()=>{
        getBookList(); //게시글 목록 조회 함수 호출
    },[]);

    return(
        <div>
            게시판 목록 출력

            <ul>
                {bookList.map((board)=>(
                    <li key={board.bookId}>{board.title}{board.author}{board.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
