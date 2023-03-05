import { createSlice } from "@reduxjs/toolkit";



const initialState =  {};

const personSlice = createSlice({
    name: 'person',
    initialState: initialState,
    reducers: {
      addPerson: (state, action) => {
        return action.payload.dta;
      },
    },
  });

export const { addPerson } = personSlice.actions;
export default personSlice.reducer;