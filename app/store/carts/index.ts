import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  cartId: number;
  title: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

interface InitialStateProps {
  cart: CartItem[];
}

const initialState: InitialStateProps = {
  cart: [
    {
      cartId: 1,
      title: "Bag",
      quantity: 2,
      unitPrice: 200,
      totalPrice: 400,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
      state.cart.push(action.payload);
    },
    deleteItems(state, action) {
      //playload is the cartId
      state.cart = state.cart.filter((item) => item.cartId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //The payload is the cartId
      const item = state.cart.find((item) => item.cartId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.cartId === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItems,
  deleteItems,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
