import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  hovered: '',
};

const modalHoverSlice = createSlice({
  name: 'modalHover',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpen = true;
      state.hovered = payload;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalHoverSlice.actions;

export default modalHoverSlice.reducer;