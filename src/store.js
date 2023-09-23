import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { donutsApi } from './services/donuts'

import cartReducer from './features/cart/cartSlice'
import modalDetailsReducer from './features/modalCardDetails/modalDetailsSlice'
import modalHoverReducer from './features/modalHoverCard/modalHoverSlice'
import modalSideNavReducer from './features/modalSideNav/modalSideNavSlice'
import activeBtnReducer from './features/activeBtn/activeBtnSlice'
import locationReducer from './features/location/locationSlice'
import formReducer from './features/form/formSlice'

import paymentReducer from './features/payment/paymentSlice'

export const store = configureStore({
  reducer: {
    [donutsApi.reducerPath]: donutsApi.reducer,
    cart : cartReducer,
    modalDetails: modalDetailsReducer,
    modalHover: modalHoverReducer,
    modalSideNav: modalSideNavReducer,
    activeBtn: activeBtnReducer,
    location: locationReducer,
    form: formReducer,

    payment: paymentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(donutsApi.middleware),
})

setupListeners(store.dispatch)