import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ICON } from '../constants/icons';
import { COLOR } from '../constants/colors';

const Task = ({ list, toDoList, setToDoList }) => {
  //수정 상태 여부
  const [isEditing, setIsEditing] = useState(false);
  //input 태그에 입력한 데이터
  const [newText, setNewText] = useState('');

  // list 변경될 때도 리렌더링
  useEffect(() => {
    setNewText(list.text);
  }, [list]);

  // 할 일 목록 수정
  const handleList = () => {
    const copyList = [...toDoList];
    const findlist = copyList.find(e => {return e.id === list.id});
    findlist.text = newText;
    setToDoList(copyList);
  };

  // 할 일 목록 삭제
  const handleDelete = () => {
    const findList = toDoList.filter(e => e.id !== list.id);
    setToDoList(findList);
  };

  return (
    <View style={styles.lists}>
      {
        isEditing 
        ? 
        <>
          <TextInput
            style={styles.input}
            autoFocus = {true}
            onBlur={() => {
              setIsEditing(false);
              setNewText(list.text);
            }}
            onChangeText={text => setNewText(text)}
            value={newText}
            onSubmitEditing={() => {handleList()}}
          />
        </>
        : 
        <View style={styles.list}>
          <Text style={styles.taskText}>{list.text}</Text>

          <Pressable onPress={() => setIsEditing(true)}>
            <Image source={ICON.ICON_EDIT} style={styles.img} />
          </Pressable>

          <Pressable onPress={handleDelete}>
            <Image source={ICON.ICON_DELETE} style={styles.img} />
          </Pressable>
        </View>
      }
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  lists: {
    backgroundColor: COLOR.BACKGROUND_ACTIVE_COLOR,
    padding: 10,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskText: {
    fontSize: 15,
    flex: 1, 
  },
  img: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
  },
});
