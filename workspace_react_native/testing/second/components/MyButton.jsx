import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/colors'

const MyButton = ({size='nomal', onPress, title='버튼'}) => {
  return (
    <Pressable
      style={e => {
        return [styles.btnContainer, styles[size], e.pressed && styles.pressed]
      }}
      onPress={() => {onPress()}}
    >
      <Text style={styles.btn}>{title}</Text>
    </Pressable>
  )
}

export default MyButton

const styles = StyleSheet.create({
  btnContainer: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: COLOR.BUTTON_COLOR,
    alignItems: "center"
    
  },
  btn: {
    color: "white"
  },
  nomal: {
    width: "20%"
  },
  large: {
    width: "100%"
  },
  pressed:{
    opacity: 0.8
  }
})