import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyTextInput = ({placeholder}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}


      returnKeyType='next'
      autoCapitalize='none'
      spellCheck={false} 
      autoCorrect={false}
    />
  )
}

export default MyTextInput

const styles = StyleSheet.create({
  input : {
    borderWidth : 1
  }
})