import { createSlice } from "@reduxjs/toolkit";

export const greenPositionSlice = createSlice({
  name: "greenPosition",
  initialState: {value : 0},

  reducers:{
    updateGreen: (state,action)=>{
      state.value = action.payload
    }
  }
})

export default greenPositionSlice.reducer

export const {updateGreen} = greenPositionSlice.actions