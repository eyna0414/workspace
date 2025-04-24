import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
//configureStore-> 공용저장소를 만드는 문법
export const store = configureStore({
  //reducer->공용으로 사용 할 데이터 등록 즉. authSlice.js
  reducer:{
    auth :  authSlice.reducer
  }
});


