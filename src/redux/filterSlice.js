import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    handleFilterChange(state, action) {
      return action.payload;
    },
  },
});

export const { handleFilterChange } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
