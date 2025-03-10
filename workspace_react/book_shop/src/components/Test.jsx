import axios from 'axios';
import React, { useState } from 'react'

const Test = () => {
  //수정할 정보를 저장할 state 변수
  const [cateInfo, setCateInfo] = useState({});

  //값이 변경될때마다 실행하는 함수
  const changeCateInfo = (e) => {
    setCateInfo({
      ...cateInfo,
      [e.target.name] : e.target.value
    })
  }

  //업데이트 기능 함수
  const updateCateData = () => {
    axios.put(`/api/categories/${cateInfo.cateNum}`, cateInfo)
    .then(res => {alert('변경 완료');})
    .catch(error => console.log(error));
  }


  //삭제함수
  const deleteCateData = (cateCode) => {
  const result = confirm('삭제할까요?');
    if(!result){
  return;
    }
  axios.delete(`/api/categories/${cateCode}`)
  .then(res => confirm('삭제완료'))
  .catch((error) => {console.log(error);});
  }
  


  return (
    <>

    </>
  )
}

export default Test