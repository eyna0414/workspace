import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import MyTextInput from './MyTextInput'
import MyButton from './MyButton'
import { COLOR } from '../constants/colors'

const ToDoList = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>To Do List</Text>
      </View>

      <View style={styles.insertContainer}>
        <TextInput 
          style={styles.input}
        />

        <MyButton 
          title='등록'
        />
      </View>
      
      <View style={styles.listContainer}>
        
      </View>
    </View>
  )
}

export default ToDoList

const styles = StyleSheet.create({
  container: {
    width: '80%'
  },
  input: {
    borderWidth: 1,
    width : '80%'
  },
  insertContainer: {
    flexDirection: "row"
  },
  listContainer: {
    backgroundColor: COLOR.BUTTON_COLOR
  }


})