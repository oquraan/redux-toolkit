import { configureStore } from "@reduxjs/toolkit";
import iceCreamReducer from "./iceCreamSlice";

// step 7 configue the store
const store = configureStore({
  reducer: {
    iceCream: iceCreamReducer,
  },
});

export default store;
