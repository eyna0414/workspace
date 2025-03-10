import React, { useEffect, useState } from 'react'
import styles from './UserJoin.module.css'
import ShopSelect from '../common_component/ShopSelect';
import ShopInput from '../common_component/ShopInput';
import axios from 'axios';
import ShopButton from '../common_component/Shopbutton';
import { regUser } from '../apis/userApi';

const UserJoin = () => {

  //input 태그들에 입력한 데이터를 저장하는 변수
  const [joinDate, setJoinDate] = useState({
    userId : '',
    userPw : '',
    userName : '',
    userEmail : '', //완성된 이메일
    email1 : '',
    email2 : '@gmail.com',
    userTel : '', //완성된 연락처 010-1111-2222
    tel1 : '',
    tel2 : '',
    tel3 : ''
  });
  
  //email1, email2 값이 변경될때만 실행
  useEffect(() => {
    setJoinDate({
      ...joinDate,
      userEmail : joinDate.email1 + joinDate.email2
    })
  }, [joinDate.email1, joinDate.email2])

  //te1, tel2 tel3 값이 변경될때만 실행

  useEffect(() => {
    setJoinDate({
      ...joinDate,
      userTel : [joinDate.tel1, joinDate.tel2, joinDate.tel3].join('-')
    })
  }, [joinDate.tel1, joinDate.tel2, joinDate.tel3])

  //값 입력 시 반복 실행되는 함수
  const changeJoinDate = (e) => {
    //이메일을 수정했다면?
    setJoinDate({
      ...joinDate,
      [e.target.name] : e.target.value,
    });
  }

  //회원가입 버튼 실행
  const regJoin = () => {
    regUser(joinDate)
    .then(res => {
      alert('가입완료');
    })
    .catch(error => console.log(error));
  }

  console.log(joinDate)

    

  return (
    <>
      <div className={styles.container}>
        <div>UserJoin</div>
        <div className={styles.content_container}>
          <div>
            <p>아이디</p>
            <div className={styles.div_id}>
              <ShopInput 
                size='wide'
                name='userId'
                value={joinDate.userId}
                onChange={e=>changeJoinDate(e)}
              />
              {/* <ShopButton title='중복'/> */}
            </div>
          </div>
  
          <div>
            <p>비밀번호</p>
            <ShopInput 
              size='wide'
              type='password'
              name='userPw'
              value={joinDate.userPw}
              onChange={e=>changeJoinDate(e)}
            />
          </div>
  
          <div>
            <p>이름</p>
            <ShopInput 
              size='wide'
              name='userName'
              value={joinDate.userName}
              onChange={e=>changeJoinDate(e)}
            />
          </div>
  
          <div>
            <p>이메일</p>
            <div className={styles.div_email}>
              <ShopInput 
                size='wide'
                name='email1'
                value={joinDate.email1}
                onChange={e=>changeJoinDate(e)}
              />
              <ShopSelect
                name='email2'
                value={joinDate.email2}
                onChange={e=>changeJoinDate(e)}
              >
                <option value="@gmail.com">@gmail.com</option>
                <option value="@naver.com">@naver.com</option>
              </ShopSelect>
            </div>
          </div>
  
          <div>
            <p>휴대전화</p>
            <div className={styles.tel}>
              <ShopInput
                size='wide'
                name='tel1'
                value={joinDate.tel1}
                onChange={e=>changeJoinDate(e)}
              />
              <ShopInput
                size='wide'
                name='tel2'
                value={joinDate.tel2}
                onChange={e=>changeJoinDate(e)}
              />
              <ShopInput
                size='wide'
                name='tel3'
                value={joinDate.tel3}
                onChange={e=>changeJoinDate(e)}
              />
            </div>
          </div>

          <div className={styles.btn_div}>
            <ShopButton title='회원가입'
              click={e => regJoin()}
            />
          </div>

        </div>
  
      </div>
    </>
  )
}

export default UserJoin