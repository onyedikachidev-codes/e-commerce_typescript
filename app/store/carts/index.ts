import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import toast from "react-hot-toast";

interface CartItem {
  productId: number;
  title: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  image?: string;
}

interface InitialStateProps {
  cart: CartItem[];
}

const initialState: InitialStateProps = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<CartItem>) {
      const newItem = action.payload;

      const existingItem = state.cart.find(
        (item) => item.productId === newItem.productId
      );

      if (!existingItem) {
        state.cart.push(newItem);
      } else {
        toast.error("Item already exists in cart");
      }
    },
    deleteItems(state, action: PayloadAction<number>) {
      //playload is the productId
      state.cart = state.cart.filter(
        (item) => item.productId !== action.payload
      );
    },
    increaseItemQuantity(state, action: PayloadAction<number>) {
      //The payload is the productId
      const item = state.cart.find((item) => item.productId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.productId === action.payload);
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

export const getCart = (state: RootState) => state.cart.cart;
export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0);
