import { type PayloadAction } from "@reduxjs/toolkit";
import { type ICart, type IProductCart } from "./type";

export const cartReducer = {
  addToCart(state: ICart, action: PayloadAction<IProductCart>) {
    const filterProduct = state.products.find(
      (product: IProductCart) => product.product.id === action.payload.product.id,
    );

    if (!filterProduct) {
      if (action.payload.quantity > 0) {
        const filterOtherProduct = state.products.filter(
          (product: IProductCart) => product.product.id !== action.payload.product.id,
        );
        const newProduct: IProductCart = {
          ...action.payload,
        };

        state.products = [newProduct, ...filterOtherProduct];
        state.totalProduct = state.totalProduct + action.payload.quantity;
      }
    } else {
      const oldProducts = [...state.products];
      for (const product of oldProducts) {
        if (product.product.id === action.payload.product.id) {
          product.quantity = product.quantity + action.payload.quantity;
        }
      }

      state.products = [...oldProducts];
      state.totalProduct = state.totalProduct + action.payload.quantity;
    }
  },
  removeFromCart(state: ICart, action: PayloadAction<number>) {
    const filterOtherProduct = state.products.filter((product: IProductCart) => product.product.id !== action.payload);
    const filterProduct = state.products.find((product: IProductCart) => product.product.id === action.payload);

    state.totalProduct = state.totalProduct - (filterProduct?.quantity || 0);
    state.products = [...filterOtherProduct];
  },
  clearCart(state: ICart) {
    state.totalProduct = 0;
    state.products = [];
  },
};
