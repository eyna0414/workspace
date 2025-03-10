import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styles from './BoardReply.module.css'

const BoardReply = () => {
  const nav = useNavigate();

  const {replyNum} = useParams();
  const {boardNum} = useParams();


  //댓글 목록을 저장 할 state 변수
  const [boardReply ,setBoardReply] = useState([]);
  
  //댓글 목록 가져오기
  useEffect(() => {
    axios.get(`/api/replies/${boardNum}`)
    .then((res) => {
      console.log(res.data);
      setBoardReply(res.data);
    })
    .catch((error) => {console.log(error)});
  }, [])

  //댓글 등록 함수
  const [writeReply, setwriteReply]= useState({
      writer : "",
      content : ""
    });
    
    const changewriteReply = (e) => {
      setwriteReply({
        ...writeReply,
      [e.target.name] : e.target.value
      })
    }

  const insertboardReply = () => {
    axios.post('/api/replies', writeReply)
    .then(() => {
      alert('댓글 등록 성공');
      nav(`/api/boards/${boardNum}`);
    })
    .catch((error) => {console.log(error)});
  }
  
  //댓글 삭제 함수
  const deleteBoardReply = () => {
    const result = confirm('삭제할까요?');
      
    if(!result){
      return;
    }
  
    axios.delete(`/api/replys/${replyNum}`)
    .then((res) => {
      alert('삭제완료');
      nav('/')
    })
    .catch((error) => {console.log(error)})
  }


  return (
    <>    
      <div className={styles.reg_reply_div}>
        <input type="text" name="writer" value={writeReply.writer} 
        onChange={(e) => {changewriteReply(e)}} placeholder='작성자'/>
          
        <input type="text" name="content" value={writeReply.content}
        onChange={(e) => {changewriteReply(e)}} placeholder='댓글 내용 입력'/>

        <button type='button' onClick={(e) => {insertboardReply()}}>댓글등록</button>
      </div>
        
      <div>
        <div className={styles.reply}>
            <span>{boardReply.writer}</span>
            <span>{boardReply.regDate}</span>
          <div>
            <p>{boardReply.content}</p>
            <button type='button' onClick={(e) => {deleteBoardReply();}}>삭제</button>
          </div>
        </div>
      </div>
      
      
    </>
  )
}

export default BoardReply