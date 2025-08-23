import React, { useState } from "react";
import {
  buyIceCream,
  restockIceCream,
  addFlavor,
  removeFlavor,
} from "../store/iceCreamSlice";
import { useSelector, useDispatch } from "react-redux";

export default function IceCreamShop() {
  // step 8 lets you read from redux store
  //   const stock = useSelector((state) => state.iceCream.stock);
  //   const flavors = useSelector((state) => state.iceCream.flavors);
  const { stock, flavors } = useSelector((state) => state.iceCream);

  const [newFlavor, setNewFlavor] = useState("");

  // step 9 senf actions using dispatch
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Ice Cream Stock: {stock} </h1>

      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>

      <button onClick={() => dispatch(restockIceCream(7))}>ReStock</button>

      <h2>Flavors</h2>
      <ul>
        {flavors.map((flavor, idx) => (
          <li key={idx}>
            {flavor}
            <button onClick={() => dispatch(removeFlavor(flavor))}>
              remove
            </button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={newFlavor}
        onChange={(e) => {
          setNewFlavor(e.target.value);
        }}
        placeholder="add new flavor"
      ></input>

      <button
        onClick={() => {
          if (newFlavor !== "") {
            dispatch(addFlavor(newFlavor));
          }
        }}
      >
        Add Flavor
      </button>
    </div>
  );
}
