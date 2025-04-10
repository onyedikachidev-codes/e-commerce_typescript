import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./carts/index";

const store = configureStore({
  reducer: {
    //Enter names of reducers
    cart: cartReducer,
  },
});

export default store;
