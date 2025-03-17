import React from 'react'
import styles from './ToDoList.module.css'
import icon_edit from '../assets/icons/edit.png'
import icon_delete from '../assets/icons/delete.png'


const ToDoList = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.firstContainer}>
          <h2>To Do List</h2>
        </div>

        <div className={styles.secondContainer}>
          <div className={styles.insertContainer}>
            <input type="text" />
            <button 
              type='button'
              className={styles.btn}
            >등록</button>
          </div>
  
          <div className={styles.listContainer}>
            <div >
              <input type="text" />
              <img src={icon_edit}/>
              <img src={icon_delete}/>
            </div>
  
            <div className={styles.lastContainer}>
              <input type="text" />
              <button 
                type='button'
                className={styles.btn}
              >확인</button>
              <button 
                type='button'
                className={styles.btn}
              >취소</button>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default ToDoList