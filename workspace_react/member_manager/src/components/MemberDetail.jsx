import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const MemberDetail = () => {
  const nav = useNavigate();
  //URL Paraneter 데이터 받기, 객체타입
  const {memId} = useParams();
  
  //상세정보를 저장 할 state변수
  const [memberInfo, setMemberInfo] = useState({});

  //상세정보 데이터 가져오기
  useEffect(() => {
    axios.get(`/api/members/${memId}`)
    .then((res) => {
      console.log(res.data);
      setMemberInfo(res.data);
    })
    .catch((error) => {console.log(error)});
  }, []);

  //회원 삭제 함수
  const deleteMember = () => {
    //confirm : 확인 -> true
    //confirm : 취소 -> false
    // const result = confirm('정말 삭제할까요?');
    
    //취소 누르면 하지마세요
    if(!confirm('정말 삭제할까요?')){
      return;
    }

    axios.delete(`/api/members/${memberInfo.memId}`)
    .then((res) => {
      alert('회원이 삭제되었습니다.');
      nav('/');
    })
    .catch((error) => {console.log(error);});
  }
  
  return (
    <>
      <div>회원 상세 정보 페이지</div>
      <div>아이디 : {memberInfo.memId}</div>
      <div>이름 : {memberInfo.memName}</div>
      <div>비밀번호 : {memberInfo.memPw}</div>
      <div>연락처 : {memberInfo.memTel}</div>
      <div>소개 : {memberInfo.memIntro}</div>
      <div>가입일 : {memberInfo.joinDate}</div>

      <button type='button' onClick={(e) => {nav('/')}}>목록으로 가기</button>
      
      <button type='button' onClick={(e) => {nav(`/update/${memberInfo.memId}`)}}>회원 수정</button>
      
      <button type='button' onClick={(e) => {
        deleteMember();
      }}>회원 삭제</button>
    </>
  )
}

export default MemberDetail