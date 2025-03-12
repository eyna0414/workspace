import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

//<SafeAreaView> 아이폰 노치 X

//input-> TextInput

const Style1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.v1}>
        <Text>text1</Text>
      </View>
      <View style={styles.v2}>
        <Text>text2</Text>
      </View>
      <View style={styles.v3}>
        <Text>text3</Text>
      </View>
    </SafeAreaView>
  );
};

export default Style1;

/**
 * react native의 컴포넌트들은 모두 flex가 기본값이다.
 * flexDirection은 기본값이 'column'이기 때문에 세로로 배치됨
 * 가로 배치를 원하면 flexDirection을 'row'로 변경한다.
 */
const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row'
  },
  v1:{
    backgroundColor : '#cccccc',
    flex : 1
  },
  v2 :{
    backgroundColor : 'blue',
    flex : 1
  },
  v3 : {
    backgroundColor : 'yellow',
    alignItems : 'center',
    flex : 1
  }
});
