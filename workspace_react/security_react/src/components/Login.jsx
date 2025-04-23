import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginReduder } from '../redux/authSlice';
import { axiosInstance } from '../redux/axiosInstance';

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    memEmail : '',
    memPw : ''
  });

  const handleLoginInfo = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name] : e.target.value
    });
  }

  //로그인 요청 함수
  const login = () => {
    ////axiosInstance 쓰면 /api X
    axiosInstance.post('/member/login', loginInfo)
    .then(res => {
      alert('로그인 성공');
      console.log(res.headers['authorization']);
      dispatch(loginReduder(res.headers['authorization']));
    })
    .catch(e => {
      //로그인 검증 실패 시 서버에서 401 상태코드를 응답
      if(e.status === 401){
        alert('로그인 실패');
      }
      else{
        console.log(e);
      }
    });
  }

  return (
    <div>
      <input type='text' name='memEmail' onChange={handleLoginInfo}/>
      <input type='password' name='memPw' onChange={handleLoginInfo}/>
      <button type='button' onClick={login}>로그인</button>
    </div>
  )
}

export default Login