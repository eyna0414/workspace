import React, { useState } from 'react'

const Controller = (props) => {
  return (
    <>

      <div>
        <button type='button' onClick={(e) => {
          props.setCount(props.count -1)
        }}>-1</button>
        <button type='button' onClick={(e)=> {
          props.setCount(props.count -10)
        }}>-10</button>
        <button type='button' onClick={(e)=> {
          props.setCount(props.count -100)
        }}>-100</button>
        <button type='button' onClick={(e)=> {
          props.setCount(props.count +1)
        }}>+100</button>
        <button type='button' onClick={(e)=> {
          props.setCount(props.count +10)
        }}>+10</button>
        <button type='button' onClick={(e)=> {
          props.setCount(props.count +100)
        }}>+1</button>
        
      </div>
    </>
    


  )
}

export default Controller