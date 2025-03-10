import './Test6.css';
import React, { useState } from 'react'

const Test6 = () => {
  const [count, setCount] = useState(0);

  const changeCount = (val) => {
    setCount(count + val);
  };

  return (
    <>
      <h2>Simple Counter</h2>
      
      <div className='count'>
        <p>현재 카운트:</p>
        <h3>{count}</h3>
      </div>


      <div className='btn'>
        <button type='button' onClick={(e) => {
          changeCount(-1);
        }}>-1</button>
        <button type='button' onClick={(e)=> {
          changeCount(-10);
        }}>-10</button>
        <button type='button' onClick={(e)=> {
          changeCount(-100);
        }}>-100</button>
        <button type='button' onClick={(e)=> {
          setCount(count +100)
        }}>+100</button>
        <button type='button' onClick={(e)=> {
          setCount(count +10)
        }}>+10</button>
        <button type='button' onClick={(e)=> {
          setCount(count +1)
        }}>+1</button>
        
      </div>
      
    </>
  )
}

export default Test6