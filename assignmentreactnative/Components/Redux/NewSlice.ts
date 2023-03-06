import { createSlice } from "@reduxjs/toolkit";

const initialState =  {};

const personSlice = createSlice({
    name: 'person',
    initialState: initialState,
    reducers: {
      addPerson: (state, action) => {
        return action.payload.dta;
      },
      changeinname:(state, action)=>{
        return state.Name = action.payload;
      },
      changeinage:(state, action)=>{
        return state.Age = action.payload;
      },
      changeinlist:(state, action)=>{
        return state.Tech = action.payload;
      },
      changeinpic:(state, action)=>{
        return state.picture = action.payload;
      },
    },
  });

export const { addPerson, changeinage, changeinpic, changeinlist, changeinname } = personSlice.actions;
export default personSlice.reducer;