import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { data } from '../data/todoList';
import Task from './Task';
import { COLOR } from '../constants/colors';

const ToDoList = () => {
  const [toDoList, setToDoList] = useState(data);
  
  //input 데이터에 저장할 state 변수
  const [newList, setNewList] = useState('');

  const addTask = () => {
    if (newList === '') return; 

    const maxId = toDoList.length > 0 ? Math.max(...toDoList.map(e => e.id)) : 0;
    const newData = {
      id: maxId + 1,
      text: newList,
    };

    setToDoList([...toDoList, newData]);
    setNewList('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>

      <View style={styles.insertContainer}>
        <TextInput
          style={styles.input}
          placeholder="+ Add a task"
          value={newList}
          onChangeText={setNewList}
          onSubmitEditing={addTask}
        />
      </View>
      
      <View style={styles.listContainer}>
        {toDoList.map((list) => (
          <Task key={list.id} list={list} toDoList={toDoList} setToDoList={setToDoList} />
        ))}
      </View>


    </View>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    width: '100%',
  },
  insertContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  listContainer:{
    backgroundColor: COLOR.BACKGROUND_COLOR,
    padding: 10,
    flexDirection: 'column',
    gap: 10
  }
  
});
