import './Test3.css';
import React, { useState } from 'react'

const Test3 = () => {
  const [btnText, setBtnText] = useState('광고닫기');
  //보이는 상태
  const [isShow, setIsShow] = useState(true);

  return (
    <>
      <div>Test3</div>
      <button type='button' onClick={() => {
        setBtnText(btnText === '광고닫기' ? '광고보기' : '광고닫기');
        setIsShow(!isShow);

      }}>{btnText}</button>

      {
        isShow ? <div className='div_ad'>오늘 구매하시면 30% SALE!!!</div> : null
      }
          



    </>
  
  );
};

export default Test3