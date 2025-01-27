import { createSlice } from "@reduxjs/toolkit";
import { type ICart } from "./type";
import { cartReducer } from "./reducer";
import { Store } from "../name";

const initialState: ICart = {
  products: [],
  totalProduct: 0,
};

const cartSlice = createSlice({
  name: Store.CART,
  initialState,
  reducers: cartReducer,
});

const { actions, reducer } = cartSlice;

export const { addToCart, removeFromCart, clearCart } = actions;

export default reducer;
