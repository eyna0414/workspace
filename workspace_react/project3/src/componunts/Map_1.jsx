import React from 'react'

const Map_1 = () => {
  const arr1 = [1, 2, 3, 4, 5];

  return (
    <>
      {
        arr1.map((num, i) => {
          return (
            <div key={i}>안녕하세요</div>
          )
        })
      }
    </>
  )
}

export default Map_1