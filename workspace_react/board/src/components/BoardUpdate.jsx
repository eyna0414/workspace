import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './BoardUpdate.module.css'


const BoardUpdate = () => {
  const nav = useNavigate();

  const {boardNum} = useParams();

  //수정할 게시글의 모든 정보를 저장할 state 변수
  const [boardInfo, setBoardInfo] = useState({});

  //수정할 게시글의 상세 데이터를 조회
  useEffect(() => {
    axios.get(`/api/boards/${boardNum}`)
    .then((res) => {
      setBoardInfo(res.data);
    })
    .catch((error) => {console.log(error)})
  }, [boardNum]);

  //값이 변경될 때마다 실행하는 함수
  const changeBoardInfo = (e) => {
    setBoardInfo({
      ...boardInfo,
      [e.target.name] : e.target.value
    });
  }

  //업데이트 기능 실행 함수
  const updateBoard = () => {
    axios.put(`/api/boards/${boardInfo.boardNum}`, boardInfo)
    .then(res => {
    alert('게시글의 내용이 변경되었습니다.');
    nav(`/detail/${boardNum}`); //boardInfo.boardNum=boardNum
    })
    .catch(error => console.log(error));
  }

  return (
    <>
      <div>
        <table className={[styles.update_table]}>
          <tbody>
            <tr>
              <td>작성일</td>
              <td>{boardInfo.regDate}</td>
              <td>작성자</td>
              <td>{boardInfo.writer}</td>
            </tr>
            <tr>
              <td>제목</td>
              <td colSpan={3}>
                <input name='title' type="text" value={boardInfo.title}
                onChange={(e) => {changeBoardInfo(e)}}/>
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td colSpan={3}>
                <input name='content' type="text" value={boardInfo.content}
                onChange={(e) => {changeBoardInfo(e)}}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button type='button' onClick={(e) => {
        nav(`/detail/${boardInfo.boardNum}`)
      }}>뒤로가기</button>
      
      <button type='button' onClick={(e) => {
        updateBoard();
      }}>수정</button>
    </>
  )
}

export default BoardUpdate