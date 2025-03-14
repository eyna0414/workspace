import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/colors'

const MyTextInput = ({placeholder = '', ...props}) => {
  return (
    <TextInput 
      style={styles.input}
      placeholder={placeholder}
      {...props}

      //secureTextEntry       // type='password'
      returnKeyType='next'  // 자판 UI의 완료를 ->
      autoCapitalize='none' // 자동 대문자 변환 비활성화
      spellCheck={false}    // 맞춤법 검사 비활성화
      autoCorrect={false}   // 맞춤법 자동 수정 비활성화

    />
  )
}

export default MyTextInput

const styles = StyleSheet.create({
  input : {
    borderWidth : 1,
    borderColor : COLOR.BTN_BACKGROUND_ACTIVE_COLOR
  }
})