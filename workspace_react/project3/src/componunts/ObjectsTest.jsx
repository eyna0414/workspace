import React, { useState } from 'react'

const ObjectsTest = () => {
  const [monitor, setMonitor] = useState({
    brand : 'samsung',
    price : 10000,
    color : 'black'
  })

  return (
    <>
      <div>ObjectsTest</div>
      브랜드 : {monitor.brand} <br />
      가격 : {monitor.price} <br />
      색상 : {monitor.color} <br />
      <button type='button' onClick={() => {
        //새로운 객체 생성
        //  const copyMoniter = {...monitor};
        //  copyMoniter.brand = 'Lg';
        //  setMonitor(copyMoniter);

        setMonitor({
          ...monitor,
          brand : 'Lg'
        });


      }}>버튼</button>
    </>
  )
}

export default ObjectsTest