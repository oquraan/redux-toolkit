import { configureStore } from "@reduxjs/toolkit";
import iceCreamReducer from "./iceCreamSlice";
// steps for persistor to make it work // step p1
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// step p2: define the persist configuration
const persistConfig = {
  key: "root", // name of the localStorage
  storage,
  // whitelist: [iceCream],
};

// step p3:
const pesistediceCreamReducer = persistReducer(persistConfig, iceCreamReducer);

// step 7 configue the store
const store = configureStore({
  reducer: {
    // iceCream: iceCreamReducer, << original reducer
    // step p4 change the reducer to the persisted version
    iceCream: pesistediceCreamReducer, // new persisted reducer
  },
});

// step p5
export const customPersisor = persistStore(store);

export default store;
