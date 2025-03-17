import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import icon_edit from '../assets/icons/edit.png'
import icon_delete from '../assets/icons/delete.png'
import { COLOR } from '../constants/colors'
import { ICON } from '../constants/icons'
import { data } from '../data/data'
import Tesk from './Tesk'

const CartList = () => {

  const [cartList, setCartList] = useState(data);
  
  //input 데이터에 저장할 state 변수
  const [newItem, setNewItem] =useState('');

  

  return (
    <View>
      <Text>CartList</Text>
      {/* <Image source={icon_edit}/>
      <Image source={icon_delete}/>
      <Image source={ICON.ICON_EDIT}/> */}

      
      {
        cartList.map((cart, i) => {
          return(
            <Tesk 
              key={i} 
              cart={cart} 
              cartList={cartList} 
              setCartList={setCartList}
            />
          )
        })
      }

      <View>
        <TextInput 
          style={styles.input}
          value={newItem}
          onChangeText={text => setNewItem(text)}
          //키보드의 완료, enter 키를 눌렀을 때 실행하는 이벤트
          onSubmitEditing={() => {
            //max id + 1 구하기
            let max = cartList[0].id;
            for(const e of cartList){
              if(max < e.id){
                max = e.id;
              }
            }
            
            const max1 = Math.max(...cartList.map((e, i) => {return e.id}));


            //저장할 객체를 생성
            const newData ={
              id : max + 1,
              item : newItem
            };
            setCartList([...cartList, newData]);
            setNewItem('');

          }}
        />
      </View>



    </View>
  )
}

export default CartList

const styles = StyleSheet.create({
  input:{
    borderWidth : 1,
    borderColor: COLOR.BTN_BACKGROUND_ACTIVE_COLOR
  }

})