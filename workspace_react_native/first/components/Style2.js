
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Style2 = () => {
  const [id, setId]  = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text>아이디</Text>
          <TextInput 
            style={styles.input}
            // onChange={(e) => {
            //   console.log(e.nativeEvent.text)
            // }}
            onChangeText={(text) => {setId(text)}}
            />
        </View>
        
        <View>
          <Text>비밀번호</Text>
          <TextInput style={styles.input}/>
        </View>

        <View style={styles.btnView}>
          <Pressable 
            style={styles.btnContainer} 
            onPress={() => {}}>
              <Text style={styles.btn}>로그인</Text>
          </Pressable>
        </View>
        
      </View>
    </SafeAreaView>
  )
}

export default Style2

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    padding : 20
  },

  content: {
    gap : 10
  },

  input : {
    borderWidth : 1,
    borderRadius : 4,
    borderColor : 'purple'
  },

  btnContainer : {
    width: '30%',
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'purple',
    borderRadius : 6,
  },

  btn :{
    color : 'white',
    padding : 5
  },
  
  btnView : {
    alignItems : 'center'
  }

})