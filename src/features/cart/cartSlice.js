import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://donuts-api.onrender.com/api/v1/products";

const initialState = {
  products: [],
  cart: [] || [...JSON.parse(localStorage.getItem("cart"))],
  totalAmount: 0,
  totalPrice: 0,
  isLoading: true,
  searchField: "",
  activeInputSearch: false,
};

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkAPI) => {
    try {
      const resp = await axios(url);
      return resp.data.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = state.products.filter((item) => item.inCart === true);
      state.cartItems.map((item) => item.inCart === false && item.amount === 0);
      state.cart = [];
      localStorage.clear();
    },

    addItem: (state, { payload }) => {
      const cartItem = state.products.find((item) => item._id === payload);
      cartItem.inCart = true;

      const itemToAdd = state.products.find((item) => item._id === payload);
      state.cart = [...state.cart, itemToAdd];
    },

    removeItem: (state, { payload }) => {
      const cartItem = state.products.find((item) => item._id === payload);
      cartItem.inCart = false;

      const updatedCart = state.cart.filter((item) => item._id !== payload);
      state.cart = updatedCart;
    },

    increase: (state, { payload }) => {
      const product = state.products.find((item) => item._id === payload);
      product.amount = product.amount + 1;
      product.priceTotal = product.price * product.amount;
    },

    decrease: (state, { payload }) => {
      const product = state.products.find((item) => item._id === payload);
      product.amount = product.amount - 1;
      product.priceTotal = product.price * product.amount;
      if (product.amount <= 0) {
        product.amount = 0;
        product.inCart = false;
      }
    },

    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      const cartItems = state.products.filter((item) => item.inCart === true);

      cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.totalAmount = amount;
      state.totalPrice = total;
    },

    onSearchChange: (state, { payload }) => {
      state.searchField = payload;
      state.activeInputSearch = true;
    },

    closeSearch: (state, { payload }) => {
      state.activeInputSearch = false;
      state.searchField = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const {
  clearCart,
  addItem,
  removeItem,
  increase,
  decrease,
  calculateTotals,
  onSearchChange,
  closeSearch,
} = cartSlice.actions;

export default cartSlice.reducer;
