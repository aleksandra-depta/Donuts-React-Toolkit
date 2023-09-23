import { createSlice } from '@reduxjs/toolkit';
import { btnsState } from '../../services/dataMenuBtns';
import { navCartLinks } from '../../services/dataCartNavBtns';

const initialState = {
  menuBtns: btnsState,
  activeMenuBtnPathname: '/menu',
  cartNavBtns: navCartLinks,
  activeCartBtnPathname: '/shoppingCart',
  activeAddressBtnPathname: '/shoppingCart/address/delivery',
};

const modalActiveBtnSlice = createSlice({
  name: 'modalActiveBtn',
  initialState,
  reducers: {
    activeMenuBtn: (state, { payload }) => {
      state.activeMenuBtnPathname = payload;
    },
    activeCartNavBtn: (state, { payload }) => {
      state.activeCartBtnPathname = payload;
    },
    activeAddressBtn: (state, { payload }) => {
      state.activeAddressBtnPathname = payload;
    },
    stepAccess: (state, { payload }) => {
      const step = state.cartNavBtns.find(el => el.link === payload)
      step.active = true;
    },
    stepAccessDefault: (state) => {
      const step = state.cartNavBtns.filter(el => el.link !== "/shoppingCart/cart" && el.active === true);
      step.map( el => 
        el.active = false
      );
    }
  },
});

export const { activeMenuBtn, activeCartNavBtn, activeAddressBtn, stepAccess, stepAccessDefault } = modalActiveBtnSlice.actions;

export default modalActiveBtnSlice.reducer;