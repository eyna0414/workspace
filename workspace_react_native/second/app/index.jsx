import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Login from '../components/Login'
import CartList from '../components/CartList'
import { COLOR } from '../constants/colors'

const MainScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar 
        barStyle={'light-content'}
        backgroundColor={COLOR.BTN_BACKGROUND_ACTIVE_COLOR} //ios는 미적용
      />

      {/* <Login/> */}
      <CartList/>
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({})