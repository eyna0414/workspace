import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/common/CustomInput'
import CustomButton from '../../components/common/CustomButton'
import { api_login } from '../../apis/memberApi'

const LoginScreen = () => {
  const [loginData, setLoginData] = useState({
    memEmail : '',
    memPw : ''
  });


  const handleLoginData = (text, name) => {
    setLoginData({
      ...loginData,
      [name] : text
    });
  }

  const login = () => {
    api_login(loginData)
    .then(res => {
      alert(11);
      const token = res.headers.authorization;
      console.log(token);
    })
    .catch(e => console.log(e));
  }

  return (
    <View>
      <CustomInput 
        label={'아이디'}
        value={loginData.memEmail}
        onChangeText={text => handleLoginData(text, 'memEmail')} 
      />
      <CustomInput 
        label={'비밀번호'}
        isPw={true}
        value={loginData.memPw}
        onChangeText={text => handleLoginData(text, 'memPw')} 
      />
      <CustomButton 
        label='로그인'
        onPress={() => login()}
      />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})