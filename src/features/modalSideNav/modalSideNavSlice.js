import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const modalSideNavSlice = createSlice({
  name: 'modalSideNav',
  initialState,
  reducers: {
    openSideNav: (state, { payload }) => {
      state.isOpen = true;
    },
    closeSideNav: (state, { payload }) => {
      state.isOpen = false;
    },
  },
});

export const { openSideNav, closeSideNav } = modalSideNavSlice.actions;

export default modalSideNavSlice.reducer;