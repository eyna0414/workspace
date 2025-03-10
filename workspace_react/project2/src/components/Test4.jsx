import './Test4.css';
import React, { useState } from 'react'

const Test4 = () => {
  // const [num1, setNum1] = useState(0);
  // const [num2, setNum2] = useState(0);
  // const [num3, setNum3] = useState(0);

  //배열로 생성
  const [numArr, setNumArr] = useState([0,0,0]);

  function changeData(index){
    const copyArr = [...numArr]; //[0,0,0]
    copyArr[index] = copyArr[index] + 1;
    setNumArr(copyArr);
  }

  return (
    <>
    <div>Test4</div>
    <span onClick={()=> {
      changeData(0);
    }}>{numArr[0]}</span>
    
    <span onClick={() => {
      changeData(1);
    }}>{numArr[1]}</span>
    
    <span onClick={() => {
      changeData(2);
    }}>{numArr[2]}</span>


    </>
  );
};

export default Test4