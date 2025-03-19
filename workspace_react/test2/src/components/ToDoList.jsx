import React, { useState } from "react";
import styles from "./ToDoList.module.css";
import icon_edit from "../assets/icons/edit.png";
import icon_delete from "../assets/icons/delete.png";
import { data } from "../../data/todoList";

const ToDoList = () => {
  const [toDoList, setToDoList] = useState(data);
  // input 데이터에 저장할 state 변수
  const [newList, setNewList] = useState('');

  // 등록 함수
  const insertList = () => {
    if (newList === "") 
      return;
    let max = toDoList[0].id;
    for (const e of toDoList) {
      if (max < e.id) {
        max = e.id;
      }
    }

    const max1 = Math.max(...toDoList.map((e, i) => {return e.id;}));

    // 저장할 객체 생성
    const newData = {
      id: max + 1,
      text: newList,
    };

    setToDoList([...toDoList, newData]);
    setNewList('');
  };

  // 삭제 함수
  const listDelete = (id) => {
    const result = confirm("삭제할까요?");
    if (!result) {
      return;
    }
    const updatedList = toDoList.filter((item) => item.id !== id);
    setToDoList(updatedList);
  };

  // 수정 상태 여부
  const [isEditing, setIsEditing] = useState(false);

  // input 태그에 입력한 데이터
  const [newText, setNewText] = useState('');

  // 수정
  const updatelist = (id, text) => {
    setIsEditing(id);
    setNewText(text);
  };

  // 수정 내용 적용
  const handleUpdate = (id) => {
    setToDoList(
      toDoList.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
    setIsEditing(false);
    setNewText("");
  };

  // 수정 취소
  const cancel = () => {
    setIsEditing(false);
    setNewText("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <h2>To Do List</h2>
      </div>

      <div className={styles.insertContainer}>
        <input
          type="text"
          placeholder="+ Add a Task"
          value={newList}
          onChange={(e) => setNewList(e.target.value)}
        />
        <button type="button" className={styles.btn} onClick={insertList}>
          등록
        </button>
      </div>

      <div className={styles.secondContainer}>
        {
          toDoList.map((e) => (
          <div key={e.id} className={styles.listContainer}>
            {
              isEditing === e.id ? 
                // 수정 상태일 때
                <div className={styles.lastContainer}>
                  <input
                    type="text"
                    value={newText}
                    name='text'
                    onChange={(e) => setNewText(e.target.value)}
                  />
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={() => handleUpdate(e.id)}
                  >
                    확인
                  </button>
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={cancel}
                  >
                    취소
                  </button>
                </div>
                : 
                <>
                  <span>{e.text}</span>
                  <img
                    src={icon_edit}
                    alt="Edit"
                    onClick={() => {
                      updatelist(e.id, e.text);
                    }}
                  />
                  <img
                    src={icon_delete}
                    alt="Delete"
                    onClick={() => listDelete(e.id)}
                  />
                </>
            }
          </div>
        )) }
      </div>
    </div>
  );
};

export default ToDoList;
