import React from 'react'
import styles from './ShopButton.module.css'

//쇼핑몰 프로젝트에 사용한 버튼 컴포넌트

//...props : 앞에서 직접 선언하지 않는 나머지 데이터를 받음
//size : small, normal, large
const ShopButton = ({title = '버튼', size='size_normal', click}) => {
  
  
  //['aa', 'bb'].join(' ') // 'aa bb'
  

  
  return (
    <button 
      type='button'
      className={[styles.btn, styles[size]].join(' ')}
      //onClick={click}
      onClick={() => {click()}}
    >
      {title}
    </button>
  )
}

export default ShopButton