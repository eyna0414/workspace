import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const MemberJoin = () => {
  const nav = useNavigate();

  //입력한 모든 정보를 저장할 state 변수
  const [regData, setRegData] = useState({
    //입력한 데이터를 가져갈수 있는 key 값
    memId : "",
    memName : "",
    memPw : "",
    memTel : "",
    memIntro : "",
    pwConfirm : ""
  });
  //input 태그에 값 입력시 실행 할 함수
  const changeRegData = (e) => {
    setRegData({
      ...regData,
      [e.target.name] : e.target.value
    });
  }

  const validateRegData = () => {
    let isValid = true;
    if(regData.memId === ''){
      alert('ID는 필수입력입니다.');
      isValid = false;
      }
    if(regData.memName === ''){
      alert('이름은 필수입력입니다.');
      isValid = false;
      }
    if(regData.memPw !== regData.pwConfirm){
      alert('입력한 비밀번호를 확인하세요.');
      isValid = false;        
      }
    return isValid;
    }

  //가입 버튼 클릭 시 실행 함수
  const regMember = () => {
    //데이터 유효성 검사(validation 처리)
    if(!validateRegData()){
      return;
    }

    axios.post('/api/members', regData)
    .then((res) => {
      if(res.data !== 1){
        alert('알 수 없는 이유로 오류가 발생했습니다.');
        return;
      }

      alert(`${regData.memId}님 가입을 축하합니다.`);
      nav('/');
    })
    .catch((error) => {
      console.log(error);
    });
  }
  console.log(regData);

  return (
    <>
      <div>회원등록</div>
      <div>
        아이디 : <input type="text" 
          value={regData.memId} 
          name='memId'
          onChange={(e) => {changeRegData(e)}}/>
      </div>

      <div>
        이름 : <input type="text" 
        value={regData.memName} 
        name='memName'
        onChange={(e) => {changeRegData(e)}}/>
      </div>

      <div>
        비밀번호 : <input type="password"
        value={regData.memPw} 
        name='memPw'
        onChange={(e) => {changeRegData(e)}} />
      </div>

      <div>
        비밀번호확인 : <input type="password" 
        value={regData.pwConfirm} 
        name='pwConfirm'
        onChange={(e) => {changeRegData(e)}}/>
      </div>

      <div>
        연락처: <input type="text"
        value={regData.memTel} 
        name='memTel'
        onChange={(e) => {changeRegData(e)}}/>
      </div>

      <div>
        회원소개 : <textarea rows = "5" cols = "30" 
        value={regData.memIntro} 
        name='memIntro'
        onChange={(e) => {changeRegData(e)}}>
        </textarea>
      </div>

      <button type='button' onClick={(e) => {
        regMember();
      }}>가입</button>
    </>
  )
}

export default MemberJoin