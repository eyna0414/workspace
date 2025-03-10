import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const MemberList = () => {
  const nav = useNavigate();

  //조회한 회원 목록을 저장할 state 변수
  const [MemberList, setMemberList] = useState([]);

  //회원 목록 조회
  useEffect(() => {
    axios.get('/api/members')
    .then((res)=>{
      console.log(res.data);
      setMemberList(res.data);
    })
    .catch((error) => {})
  }, []);

  return (
    <>
      <div>게시글 목록 페이지</div>
      <table border={1}>
        <colgroup>
          <col width={'5%'}/>
          <col width={'15%'}/>
          <col width={'10%'}/>
          <col width={'20%'}/>
          <col width={'*'}/>
        </colgroup>
        <thead>
          <tr>
            <th>NO</th>
            <th>회원 아이디</th>
            <th>회원 이름</th>
            <th>회원 연락처</th>
            <th>가입일</th>
          </tr>
        </thead>
        <tbody>
          {
            MemberList.map((member, i) => {
              return(
                <tr key={i}>
                  <td>{MemberList.length - i}</td>
                  <td>
                    <Link to={`/detail/${member.memId}`}><span>{member.memId}</span></Link>
                  </td>
                  <td>{member.memName}</td>
                  <td>{member.memTel}</td>
                  <td>{member.joinDate}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      {/* 회원등록 버튼 클릭하면 회원 등록 페이지로 이동 */}
      <button type='button' onClick={(e) => {
        nav('/join')
      }}>회원등록</button>
    </>
  )
}

export default MemberList