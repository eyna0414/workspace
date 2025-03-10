import React from 'react'

const Map_3 = () => {

  //locallist를 사용하여 selectbox를 그리세요
  const locallist = ['경기도', '강원도', '경상도', '전라도']

  return (
    <>
      <select>
        {
          locallist.map((local, i) => {
            return (
              <option key={i}>{local}</option>
            )
          })
        }  
      </select>
    </>
  )
}

export default Map_3