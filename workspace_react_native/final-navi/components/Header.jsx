import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Header = () => {
  //페이지 이동 
  const router = useRouter();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Header</Text>
      <View style={styles.loginStatus}>
        
        <Pressable onPress={() => router.push('/auth/login')}>
          <Text>Login</Text>
        </Pressable>
        
        <Pressable onPress={() => router.push('/auth/join')}>
          <Text>Join</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer:{
    height:70,
    backgroundColor:'orange'
  },
  headerTitle:{
    fontSize:30,
    color:'white'
  },
  loginStatus:{
    //가로배치
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
    paddingRight: 12
  }
})












