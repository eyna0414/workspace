import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ICON } from "../constants/icons";
import { COLOR } from "../constants/colors";

const Tesk = ({cart, cartList, setCartList}) => {
  //수정 상태 여부
  const [isEditing, setIsEditing] = useState(false);

  //수정을 위해서는 input 태그에 입력한 글자(newText), id도 필요
  //전체 데이터도 필요(cartList)

  //input 태그에 입력한 데이터
  //주의! props로 전달된 데이터를 state변수의 초기 값으로 주면 안 됨
  const [newText, setNewText] = useState('');

  //cart값이 변경할 때도 리렌더링
  useEffect(() => {
    setNewText(cart.item);
  }, [cart])

  //장바구니 목록 데이터 수정
  const handleCartList = () => {
    //상품목록(cartList)에서 현재 수정 중인 상품의 id(cart.id)를 찾아서 
    //찾은 상품의 item속성값을 input태그에 입력한 글자로 바꿔준다.

    //첫번째 for-if
    // const copyCartList = [...cartList];
    // for(const e of copyCartList){
    //   if(e.id === cart.id){
    //     e.item = newText;
    //   }
    // }
    // //setCartList(cartList); 사용 X
    // //setCartList([...cartList]);
    // setCartList(copyCartList);
    //첫번째 풀이 끝

    //두번째 find 함수
    //const findCartList = copyCartList.find(e => e.id === cart.id)
    const copyCartList = [...cartList]
    const findCartList = copyCartList.find(e => {return e.id === cart.id})
    findCartList.item = newText;
    setCartList([copyCartList]);
    //두번째 풀이 끝    
  }

  return (
    <View style={styles.container}>
      {
        isEditing
        ?
        <>
          <TextInput 
          style={styles.input}
          autoFocus={true}
          //포커스아웃 이벤트
          onBlur={() => {
            setIsEditing(false);
            setNewText(cart.item);
          }}
          onChangeText={text => setNewText(text)}
          value={newText}
          //완료버튼 눌렀을때 실행
          onSubmitEditing={() => {handleCartList()}}
          />
        </>
        :
        <>
        <Pressable onPress={() => {setIsEditing(true)}}>
          <Image source={ICON.ICON_EDIT} />
        </Pressable>

        <Text style={styles.title}>{cart.item}</Text>
        <Image 
          source={ICON.ICON_DELETE} 
          style={styles.img} 
        />
        </>
      }

      
    </View>
  );
};

export default Tesk;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    margin: 12,
    backgroundColor: COLOR.BTN_BACKGROUND_COLOR,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    flex: 1,
    fontSize: 18,
  },
  img: {
    width: 20,
    height: 20,
  },
  input: {
    borderWidth: 1,
    width: '100%'
  }
});
