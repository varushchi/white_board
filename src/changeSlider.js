import { createSlice } from "@reduxjs/toolkit";

const sliderSlice = createSlice({
  name: "slider",
  initialState : {value: 1},
  reducers: {
    changeSlider: (state,action) => {
      state.value = action.payload
    }
  }
})

export const {changeSlider} = sliderSlice.actions

export default sliderSlice.reducer