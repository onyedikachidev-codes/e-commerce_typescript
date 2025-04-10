import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  cartId: number;
  name: string;
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
      name: "Bag",
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
    increaseItemQuantity(state, action) {},
    decreaseItemQuantity(state, action) {},
    clearCart(state, action) {},
  },
});

export const { addItems } = cartSlice.actions;

export default cartSlice.reducer;
