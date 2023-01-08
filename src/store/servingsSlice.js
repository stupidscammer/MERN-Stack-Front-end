import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
};
export const servingsSlice = createSlice({
  name: 'servings',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    
  },  
});

export const { increment, decrement } = servingsSlice.actions;
export const selectCount = (state) => state.servings.value;


export default servingsSlice.reducer;
