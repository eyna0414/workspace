import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLOR } from "../constants/colors";

const MyButton = ({size='nomal' , onPress, title='버튼'}) => {
  return (
    // <Pressable style={[styles.btnContainer, styles[size]]}>
    <Pressable 
      style={(e) => {
        console.log(e)
        return [styles.btnContainer, styles[size], e.pressed && styles.pressed]
      }}
      onPress={() => {onPress()}}
    >
      <Text style={styles.btn}>{title}</Text>
    </Pressable>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  btnContainer: {
    height: 35,
    borderRadius: 6,
    backgroundColor: COLOR.BTN_BACKGROUND_COLOR,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  btn: {
    color: "white",
  },
  nomal: {
    width: "30%",
  },
  large: {
    width: "100%",
  },
  pressed:{
    opacity: 0.8
  }
});
//
