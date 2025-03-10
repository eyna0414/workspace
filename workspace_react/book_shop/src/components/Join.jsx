
import React from 'react'
import styles from './Join.module.css'
import ShopInput from '../common_component/ShopInput'
import ShopSelect from '../common_component/ShopSelect'
import ShopButton from '../common_component/Shopbutton'

const Join = () => {
  return (
    <div className={styles.container}>
      <h3>회원 가입하기</h3>
      <div className={styles.content_container}>
        <div className={styles.form}>
          <p>아이디</p>
          <div>
            <ShopInput size='wide'/>
          </div>
        </div>
        <div className={styles.form}>
          <p>비밀번호</p>
          <div>
          <ShopInput size='wide' />
          </div>
        </div>
        <div className={styles.form}>
          <p>이름</p>
          <div>
            <ShopInput size='wide' />
          </div>
        </div>
        <div className={styles.form}>
          <p>이메일</p>
          <div className={styles.email_div}>
            <ShopInput />
            <ShopSelect>
              <option value="@gmail.com">@gmail.com</option>
              <option value="@naver.com">@naver.com</option>
            </ShopSelect>
          </div>
        </div>
        <div className={styles.form}>
          <p>연락처</p>
          <div className={styles.tel_div}>
            <ShopInput size='wide' />
            <ShopInput size='wide' />
            <ShopInput size='wide'/>
          </div>
        </div>
        <div className={styles.btn_div}>
          <ShopButton title='회원가입'/>
        </div>
      </div>
    </div>
  )
}

export default Join