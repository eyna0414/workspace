import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import MyTextInput from './MyTextInput'
import MyButton from './MyButton'

const Login = () => {
  const printHello = () => {
    console.log('안녕하세요')
  }
  //input에 저장할 변수
  const [data, setData] = useState({
    id : '',
    pw : ''
  })

  const changeData = (text, name) => {
    setData({
      ...data,
      [name] : text
    })
  }

  return (
      <View>
        <Text>Login</Text>

        <TextInput 
          value={data.id} 
          onChangeText={text => changeData(text, 'id')}
        />
        <TextInput 
          value={data.pw}
          onChangeText={text => changeData(text, 'pw')}
        />

        <MyTextInput 
          placeholder={'aaa'}
          value={data.id} 
          onChangeText={text => changeData(text, 'id')}
        />
        <MyTextInput 
          placeholder={'bbb'}
          value={data.pw}
          onChangeText={text => changeData(text, 'pw')}
        />

        {/* alert으로 안녕하세요 */}
        <MyButton onPress={() => {alert('안녕하세요')}}/> 
        {/* console에 안녕하세요 */}
        <MyButton size='large' onPress={() => printHello()}/>
        
        {/* 키보드로 입력하고 데이터확인 누르면 입력한 내용 alert에 띄우기 */}
        <MyButton 
          title='데이터확인' 
          onPress={() => {
            alert(` id = ${data.id}, pw = ${data.pw}`);
          }}
        />
      </View>
  )
}

export default Login

const styles = StyleSheet.create({})