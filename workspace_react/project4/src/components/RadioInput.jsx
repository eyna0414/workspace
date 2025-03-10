import React, { useState } from 'react'

const RadioInput = () => {
  //선택한 라디오의 값을 저장할 state 변수
  const [feel, setFeel] = useState('soso');

  return (
    <>
      <h2>Radio Input</h2>
      {/* 여러 선택지 중에 무조건 하나만 선택 */}
      {/* radio의 name 속성값을 동일하게 작성하면 짝지가 됨 */}
      <input type="radio" name='aaa' value='bad' checked={feel === 'bad'} 
      onChange={(e)=>{
        setFeel(e.target.value);
      }}/> 나쁨
      <input type="radio" name='aaa' value='soso' checked={feel === 'soso' } 
      onChange={(e)=>{
        setFeel(e.target.value);
      }}/> 보통
      <input type="radio" name='aaa' value='good' checked={feel === 'good'} 
      onChange={(e)=>{
        setFeel(e.target.value);
      }}/> 좋음

      <br />
      선택한 값 : {feel}

    </>
  )
}

export default RadioInput