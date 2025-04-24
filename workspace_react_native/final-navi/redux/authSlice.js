import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name : 'auth',
  //초기값
  initialState : {token : null, isLogin : false},
  //login, logout 시 초기값 변경
  reducers :{
    loginReducer : (state, action) => {
      state.token = action.payload;
      state.isLogin = true;
    },
    logoutReducer : (state) => {
      state.token = null;
      state.isLogin = false;
    }
  }
});

export const {loginReducer, logoutReducer} = authSlice.actions;
export default authSlice;

