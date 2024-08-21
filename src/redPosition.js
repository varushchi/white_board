import { createSlice } from "@reduxjs/toolkit";

export const redPositionSlice = createSlice({
  name: "redPosition",
  initialState: {value : 0},

  reducers:{
    updateRed: (state,action)=>{
      state.value = action.payload
    }
  }
})

export default redPositionSlice.reducer

export const {updateRed} = redPositionSlice.actions