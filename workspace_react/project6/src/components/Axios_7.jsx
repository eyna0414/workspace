import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios_7 = () => {
  const phone = {
    brand : 'samsung',
    price : 1000,
    color : 'red'
  };

  //axios.post('/api/t7', phone).then().catch();
  
  const student = {
    name : 'kim',
    korScore : 80,
    engScore : 70,
    mathScore : 90
  };

  const [sum, setSum] = useState(0);

  //아래 코드의 결과 전달되는 데이터를 자바에서 받은 후
  //전달된 국, 영, 수 점수의 총점을 다시 리액트로 가져와서
  //react 화면에 총점을 보여주세요!
  
  useEffect(() => {
    axios.post('/api/t8', student)
    .then((res) => {
    console.log(res.data);
    setSum(res.data);
  })
  .catch();
  }, );
  
  
  return (
    <>
      <div>Axios_7</div>
      <div>합 : {sum}</div>
    </>
  )
}

export default Axios_7