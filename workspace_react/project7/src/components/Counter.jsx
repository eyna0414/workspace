import React, { useState } from 'react'
import Display from './Display'
import Controller from './Controller'

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Counter</div>

      <h2>Simple Counter</h2>
      <Display count={count}/>
      <Controller setCount={setCount} count={count}/>
      
    </>
    
  )
}

export default Counter