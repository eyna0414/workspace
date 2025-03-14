import React from 'react'

const ToDoList = () => {
  return (
    <>
      <div>
        <div>
          <h2>To Do List</h2>
        </div>
        <div>
          <input type="text" />
          <button type='button'>등록</button>
        </div>
        <div>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="text" />
            <button type='button'>확인</button>
            <button type='button'>취소</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ToDoList