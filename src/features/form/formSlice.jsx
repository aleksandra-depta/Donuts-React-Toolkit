import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  street: '',
  streetNumber: '',
  city: '',
  state: '',
  zip: '',
  name: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  type: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    compliteStreet: (state, { payload }) => {
      state.street = payload;
    },
    compliteStreetNumber: (state, { payload }) => {
      state.streetNumber = Number(payload);
    },
    compliteCity: (state, { payload }) => {
      state.city = payload
    },
    compliteState: (state, { payload }) => {
      state.state = payload
    },
    compliteZip: (state, { payload }) => {
      state.zip = Number(payload);
    },
    compliteName: (state, { payload }) => {
      state.name = payload
    },
    compliteLastName: (state, { payload }) => {
      state.lastName = payload
    },
    complitePhoneNumber: (state, { payload }) => {
      state.phoneNumber = Number(payload);
    },
    compliteEmail: (state, { payload }) => {
      state.email = payload
    },
    deliveryType: (state, { payload }) => {
      state.type = payload
    },
  },
});

export const { 
  compliteStreet,
  compliteStreetNumber,
  compliteCity,
  compliteState,
  compliteZip,
  compliteName,
  compliteLastName,
  complitePhoneNumber,
  compliteEmail,
  deliveryType
 } = formSlice.actions;

export default formSlice.reducer;