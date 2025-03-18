import React, { useState } from 'react'
import styles from './ToDoList.module.css'
import icon_edit from '../assets/icons/edit.png'
import icon_delete from '../assets/icons/delete.png'
import { data } from '../../data/todoList'


const ToDoList = () => {
  const [todoList, settodoList] = useState(data);


  return (
    <>
      <div className={styles.container}>
        <div className={styles.firstContainer}>
          <h2>To Do List</h2>
        </div>

        <div className={styles.insertContainer}>
          <input type="text" placeholder='+ Add a Task'/>
          <button
            type='button'
            className={styles.btn}
          >등록</button>
        </div>

        <div className={styles.secondContainer}>
          <div className={styles.listContainer}>
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
    </>
  )
}

export default ToDoList