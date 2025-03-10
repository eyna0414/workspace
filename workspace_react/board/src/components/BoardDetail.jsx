import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styles from './BoardDetail.module.css'
import BoardReply from './BoardReply';

const BoardDetail = () => {
  const nav = useNavigate();
  
  const {boardNum} = useParams();
  

  //상세정보를 저장 할 state 변수
  const [boardInfo, setBoardInfo] = useState({});


  //상세정보 데이터 가져오기
  useEffect(() => {
    axios.get(`/api/boards/${boardNum}`)
    .then((res) => {
      console.log(res.data);
      setBoardInfo(res.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [boardNum]);

  //삭제 함수
  const deleteBoard = () => {
    const result = confirm('삭제할까요?');
    if(!result){
      return;
    }
    axios.delete(`/api/boards/${boardNum}`)
    .then((res) => {
    })
    .catch((error) => {console.log(error);});
  }
  
  // ///////////////////////////////////////////////

  //댓글 목록을 저장 할 state 변수
  const [boardReply ,setBoardReply] = useState([]);

  //댓글 정보를 저장할 state 변수
  const [writeReply, setwriteReply] = useState({
    writer : '',
    content : '',
    boardNum : boardNum
  });

  //댓글 입력 시 실행되는 함수
  const changeReplyInfo = (e) => {
    setwriteReply({
      ...writeReply,
      [e.target.name] : e.target.value
    })
  }
  
  const [num , setNum] = useState(0);
  //댓글 목록 조회, 마운트 + num 값이 변경될 때도 실행
  useEffect(() => {
    axios.get(`/api/replies/${boardNum}`)
    .then((res) => {
      console.log(res.data);
      setBoardReply(res.data);
    })
    .catch((error) => {console.log(error)});
  }, [num])

  //조회 쿼리 여러개 동시 실행하기
  // useEffect(() => {
  //   axios.all([
  //     axios.get(`/api/boards/${boardNum}`), 
  //     axios.get(`/api/replies/${boardNum}`)
  //   ])
  //   .then(axios.spread((res1, res2) => {
  //     console.log(res1.data);
  //     console.log(res2.data);
  //     setBoardInfo(res1.data);
  //     setBoardReply(res2.data);
  //   }))
  //   .catch((error) => {console.log(error)});
  // }, [])


  //댓글 등록 기능 함수
  const insertBoardReply = () => {
    axios.post(`/api/replies`, writeReply)
    .then(res => {
      alert('댓글 등록 완료');
      setNum(num+1);
      setwriteReply({
        ...writeReply,
        writer : '',
        content : ''
      });
    })
    .catch(error => console.log(error));
  }

  console.log(dayjs(boardInfo.regDate).format('YYYY.MM.DD HH:mm:ss'));

   //댓글 삭제 함수
  const deleteBoardReply = (replyNum) => {
    const result = confirm('삭제할까요?');
    if(!result){
      return;
    }
    axios.delete(`/api/replies/${replyNum}`)
    .then(res => {
      //다시 댓글 목록을 조회 => num값 변경
      setNum(num+1);
    })
    .catch(error => console.log(error))
  }
  

  return (
    <>
      <div className={[styles.container]}>
        <div>
          <table className={[styles.detail_table]}>
            <tbody>
              <tr>
                <td>작성일</td>
                <td>{dayjs(boardInfo.regDate).format('YYYY-MM-DD HH:mm:ss')}</td>
                <td>작성자</td>
                <td>{boardInfo.writer}</td>
                <td>조회수</td>
                <td>{boardInfo.readCnt}</td>
              </tr>
              <tr>
                <td>제목</td>
                <td colSpan={5}>{boardInfo.title}</td>
              </tr>
              <tr>
                <td>내용</td>
                <td colSpan={5}>{boardInfo.content}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.btn_div}>
        <button type='button' onClick={(e) => {nav('/')}}>목록가기</button>
        <button type='button' onClick={(e) => {nav(`/update/${boardInfo.boardNum}`)}}>수정</button>
        <button type='button' onClick={(e) => {deleteBoard();}}>삭제</button>
      </div>



      <div className={styles.reg_reply_div}>
        <input type="text" name='writer' value={writeReply.writer} placeholder='작성자' onChange={e => changeReplyInfo(e)}/>
        <input type="text" name='content' value={writeReply.content}  placeholder='댓글 내용 입력' onChange={e => changeReplyInfo(e)}/>
        <button type='button' onClick={e => insertBoardReply()} >댓글등록</button>
      </div>
      
      <div className='reply_list_div'>
        {
          boardReply.map((reply, i) => {
            return (
              <div key={i} className={styles.reply}>
              <span>{reply.writer}</span>
              <span>{dayjs(reply.regDate).format('YYYY.MM.DD')}</span>
              <div>
                <p>{reply.content}</p>
                <button type='button' onClick={e => deleteBoardReply(reply.replyNum)}>삭제</button>
              </div>
              </div>
            )
          })
        }
        
      </div>

      {/* <BoardReply/> */}
      
    </>
  )
}

export default BoardDetail