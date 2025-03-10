import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const MemberUpdate = () => {
  const nav = useNavigate();

  const {memId} = useParams();

  //수정할 회원의 모든 정보를 저장할 state 변수
  const [memberInfo, setMemberInfo] = useState({});


  //마운트 시 spring에서 회원정보를 조회하여, 조회한 데이터를 memberInfo 변수에 저장
  useEffect(() => {
    axios.get(`/api/members/${memId}`)
    .then((res) => {
      //console.log(res.data);
      setMemberInfo(res.data);
    })
    .catch((error) => {
      console.log(error)
    })
  }, []);

  //input 태그의 값이 변경될 때마다 실행하는 함수
  const changeMemberInfo = (e) => {
    setMemberInfo({
      ...memberInfo,
      [e.target.name] : e.target.value
    });
  }

  console.log(memberInfo);

  //업데이트 기능 실행 함수
  const updateMember = ()  => {
    axios.put(`/api/members/${memberInfo.memId}`, memberInfo)
    .then((res) => {
      alert('회원의 정보가 변경되었습니다');
      nav(`/detail/${memberInfo.memId}`);
    })
    .catch((error) => {
      console.log(error)
    });
  }
    

  return (
    <>
      <div>회원 수정 페이지</div>
      <div>아이디 : {memberInfo.memId}</div>

      <div>이름 : <input name = 'memName' type="text" 
      value={memberInfo.memName} 
      onChange={(e) => {changeMemberInfo(e)}}/></div>

      <div>비밀번호 : {memberInfo.memPw}</div>

      <div>연락처 : <input name='memTel' type="text" 
      value={memberInfo.memTel} 
      onChange={(e) => {changeMemberInfo(e)}}/></div>

      <div>소개 : <input name='memIntro' type="text" 
      value={memberInfo.memIntro} 
      onChange={(e) => {changeMemberInfo(e)}}/></div>
      
      <div>가입일 : {memberInfo.joinDate}</div>
      
      <button type='button' onClick={(e) => {
        updateMember();
      }}>수정완료</button>


    </>
  )
}

export default MemberUpdate