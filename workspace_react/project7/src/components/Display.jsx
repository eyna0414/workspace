import React, { useState } from 'react'

const Display = (props) => {  
  return (
    <>

      <div>
        <p>현재 카운트 : </p>
        <h3>{props.count}</h3>
      </div>

    </>
    
    
  )
}

export default Display