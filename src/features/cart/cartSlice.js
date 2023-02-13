import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
import axios from "axios";

const url = "http://localhost:3000/cartItems";
const initialState = {
  cartItems: cartItems,
  quantity: 0,
  total: 0,
  isLoading: true,
};

export async function getCartItems() {
  let resp = await fetch("http://localhost:3000/cartItems");
  let data = await resp.json();
  return data;
}
// getCartItems().then((data) => console.log(data));
// export const getCartItems = createAsyncThunk(
//   "cart/getCartItems",
//   async (name, thunkAPI) => {
//     try {
//       console.log(name);
//       console.log(thunkAPI);
//       const resp = await axios(url);
//       return resp.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue("something went wrong");
//     }
//   }
// );

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      return { cartItems: [] };
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id != itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.quantity = cartItem.quantity + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.quantity = cartItem.quantity - 1;
    },
    calculateTotals: (state) => {
      let quantity = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        quantity += item.quantity;
        total += item.quantity * item.price;
      });
      state.quantity = quantity;
      state.total = total;
    },
    extraReducers: {
      [getCartItems.pending]: (state) => {
        state.isLoading = true;
      },
      [getCartItems.fulfilled]: (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.cartItems = action.payload;
      },
      [getCartItems.rejected]: (state, action) => {
        console.log(action);
        state.isLoading = false;
      },
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
