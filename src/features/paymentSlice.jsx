import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formsComplited: false
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    successForm: (state) => {
      state.formsComplited = true
    },
    emptyForm: (state) => {
      state.formsComplited = false
    },
  },
});

export const { successForm, emptyForm } = paymentSlice.actions;

export default paymentSlice.reducer;

