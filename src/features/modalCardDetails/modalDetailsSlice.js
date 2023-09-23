import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  openCard: '',
};

const modalDetailsSlice = createSlice({
  name: 'modalDetails',
  initialState,
  reducers: {
    openDetailModal: (state, { payload }) => {
      state.isOpen = true;
      state.openCard = payload;
    },
    closeDetailModal: (state, { payload }) => {
      state.isOpen = false;
      state.openCard = '';
    },
  },
});

export const { openDetailModal, closeDetailModal } = modalDetailsSlice.actions;

export default modalDetailsSlice.reducer;