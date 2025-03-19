import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ICON } from '../constants/icons';
import { COLOR } from '../constants/colors';

const Task = ({ list, toDoList, setToDoList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState('');

  // list 변경될 때  업데이트
  useEffect(() => {
    setNewText(list.text);
  }, [list]);

  // 할 일 목록 수정
  const handleList = () => {
    const copyList = [...toDoList];
    const findIndex = copyList.findIndex(e => e.id === list.id);
    
    if (findIndex !== -1) {
      copyList[findIndex].text = newText;
      setToDoList(copyList);
    }

    setIsEditing(false);
  };

  // 할 일 목록 삭제
  const handleDelete = () => {
    const findList = toDoList.filter(e => e.id !== list.id);
    setToDoList(findList);
  };

  return (
    <View style={styles.listContainer}>
      {isEditing ? (
        <TextInput
          style={styles.input}
          autoFocus
          onBlur={() => {
            setIsEditing(false);
            setNewText(list.text);
          }}
          onChangeText={text => setNewText(text)}
          value={newText}
          onSubmitEditing={handleList}
        />
      ) : (
        <View style={styles.list}>
          <Text style={styles.taskText}>{list.text}</Text>

          {/* 수정 버튼 */}
          <Pressable onPress={() => setIsEditing(true)}>
            <Image source={ICON.ICON_EDIT} style={styles.img} />
          </Pressable>

          {/* 삭제 버튼 */}
          <Pressable onPress={handleDelete}>
            <Image source={ICON.ICON_DELETE} style={styles.img} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: COLOR.BACKGROUND_ACTIVE_COLOR,
    padding: 10,
    marginBottom: 8,
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
