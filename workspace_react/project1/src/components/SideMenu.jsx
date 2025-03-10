//rafce
//React Arrow Function Component Export


import React from 'react'

const SideMenu = () => {
  function click(){
    console.log(3);
  }

  return (
    <>
      <div>SideMenu</div>
      <button type='button' onClick={click}>사이트버튼1</button>
      <button type='button' onClick={click}>사이트버튼2</button>
    </>
  )
}

export default SideMenu