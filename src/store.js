import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { donutsApi } from "./services/donuts";

import cartReducer from "./features/cartSlice";
import modalDetailsReducer from "./features/modalDetailsSlice";
import modalHoverReducer from "./features/modalHoverSlice";
import modalSideNavReducer from "./features/modalSideNavSlice";
import activeBtnReducer from "./features/activeBtnSlice";
import locationReducer from "./features/locationSlice";
import formReducer from "./features/formSlice";

import paymentReducer from "./features/paymentSlice";

export const store = configureStore({
  reducer: {
    [donutsApi.reducerPath]: donutsApi.reducer,
    cart: cartReducer,
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
});

setupListeners(store.dispatch);
