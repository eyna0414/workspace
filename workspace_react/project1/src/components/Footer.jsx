
function Footer(){
  return (
    <>
      <div>footer</div>
      <button type="button" onClick={() => {
        console.log('버튼 클릭')
      }}>button1</button>

      <button type="button" onMouseEnter={() => {
        console.log(5)
      }}>버튼2</button>

      <input type="text" onChange={() => {
        alert('!!!');
      }}/>
    </>
  )
}

export default Footer