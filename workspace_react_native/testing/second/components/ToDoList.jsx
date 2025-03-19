import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React from 'react';
import { COLOR } from '../constants/colors';
import { ICON } from "../constants/icons";

const ToDoList = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>To Do List</Text>
      </View>

      <View style={styles.insertContainer}>
        <TextInput
          style={styles.input}
          placeholder="+ Add a task"
        />

      </View>
      
      <View style={styles.listContainer}>
      
      <TextInput 
        style={styles.input}
      />
      <Pressable>
          <Image 
            source={ICON.ICON_EDIT} 
            style={styles.img} 
          />
        </Pressable>
        
        <Pressable>
          <Image 
            source={ICON.ICON_DELETE} 
            style={styles.img} 
          />
        </Pressable>
      </View>

    </View>
  );
}

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    width: '80%'
  },
  input: {
    borderWidth: 1,
    width: '80%'
  },
  insertContainer: {
    flexDirection: "row"
  },
  listContainer: {
    backgroundColor: COLOR.BUTTON_COLOR
  },
  img: {
    width: 30,
    height: 30,
    marginLeft: 10
  }
});
