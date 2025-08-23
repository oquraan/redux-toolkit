import { createSlice } from "@reduxjs/toolkit";

// step 1 define inital state
const initialState = {
  stock: 10, // ice cream stock we have 10 already
  flavors: ["vanilla", "strawberry", "chocolate"],
};

// step 2  >> create the slice
const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    // step 3 update state directly
    buyIceCream: (state) => {
      // { type: 'iceCream/buyIceCream' }
      state.stock -= 1;
    },
    // step 4: update state using payload
    restockIceCream: (state, action) => {
      // { type: 'iceCream/restockIceCream', payload: 7 }
      state.stock += action.payload; // add the payload value to the stock
    },
    // payload = the extra information you send with the action
    addFlavor: (state, action) => {
      state.flavors.push(action.payload);
    },
    removeFlavor: (state, action) => {
      state.flavors = state.flavors.filter(
        (flavor) => flavor !== action.payload
      );
    },
  },
});

// step 5 export actions
export const { buyIceCream, restockIceCream, addFlavor, removeFlavor } =
  iceCreamSlice.actions;

// step 6 export reducer to the store
export default iceCreamSlice.reducer;
