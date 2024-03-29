import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pickUpId: ''
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    addPickUpId: (state, { payload }) => {
      state.pickUpId = payload;
    },
    removePickUpId: (state) => {
      state.pickUpId = '';
    },
  },
});

export const { addPickUpId, removePickUpId } = locationSlice.actions;

export default locationSlice.reducer;