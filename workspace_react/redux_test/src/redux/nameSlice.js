import { createSlice } from "@reduxjs/toolkit";

//const[name, setName] = useState('hong');
const nameSlice = createSlice({
  name : 'name',
  initialState : {data : 'hong'},
  reducers : {
    changeName : (state, action) => {
      //return state + action.payload;
      state.data += action.payload;
    }
  }
});


export const {changeName} = nameSlice.reducer
export default nameSlice;