import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './BoardJoin.module.css'


const BoardJoin = () => {
  const nav = useNavigate();

  const [writeData, setWriteData]= useState({
    title : "",
    writer : "",
    content : ""
  });

  const changewriteData = (e) => {
    setWriteData({
      ...writeData,
    [e.target.name] : e.target.value
    })
  }

  console.log(writeData);

  //게시글 등록 함수
  const insertBoard = () => {
    axios.post('/api/boards', writeData)
    .then(() => {
      alert('게시글 등록 성공');
      nav('/');
    })
    .catch((error) => {console.log(error)});
  }
  
  return (
    <>
      <div className={[styles.container]}>
        <table className={[styles.join_table]}>
          <tbody>
            <tr>
              <td>제목</td>
              <td><input type="text" name="title" value={writeData.title} onChange={(e) => {changewriteData(e)}}/></td>
            </tr>
            <tr>
              <td>작성자</td>
              <td><input type="text" name="writer" value={writeData.text} onChange={(e) => {changewriteData(e)}}/></td>
            </tr>
            <tr>
              <td>내용</td>
              <td><input type="text" name="content" value={writeData.content} onChange={(e) => {changewriteData(e)}}/></td>
            </tr>
          </tbody>
        </table>
      </div>

      <button type='button' onClick={(e) => {insertBoard()}}>글등록</button>
    </>
  )
}

export default BoardJoin