import { createSlice } from "@reduxjs/toolkit";

const initialState= {};
const Cardslice = createSlice({
    name:"card",
    initialState,
    reducers:{
        addingdetail(state, action){
            console.log("state");
            const newobj = {
                // Age : action.payload.Age,
                // Name :action.payload.Name,
                // Tech : action.payload.Tech,
                // Picture : action.payload.Selfie,
                // LocationLat : action.payload.LocationLat,
                // LocationArea : action.payload.LocationArea,
                // LocationLong : action.payload.LocationLong
            }
            return state;
        },
        removingdetail(state, action){
            return state;
        }
    }
})

export const {addingdetail, removingdetail} = Cardslice.actions;
export default Cardslice.reducer;