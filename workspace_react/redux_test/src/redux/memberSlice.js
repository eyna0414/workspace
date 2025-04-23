import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
  name : 'member',
  initialState : {
    memId : 'hong',
    memAge : 20

  },
  reducers : {
    handleMemberId : (state) => {
      //return {...state, memId:'java'}
      state.memId = 'java'
    }
  }
});


export const {handleMemberId} = memberSlice.actions;
export default memberSlice;