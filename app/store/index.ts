import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./carts/index";

const store = configureStore({
  reducer: {
    //Enter names of reducers
    account: cartReducer,
  },
});

export default store;
