import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import cartItems from "../cartItems";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, title, price, amount, img }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{img}</h1>
      <h1>{title}</h1>
      <h1>{amount}</h1>
      <button
        onClick={() => {
          dispatch(removeItem(id));
        }}
      >
        remove
      </button>
      <button
        onClick={() => {
          dispatch(increase({ id }));
        }}
      >
        <ChevronUp />
      </button>
      <p>{amount}</p>
      <button
        onClick={() => {
          if (amount === 1) {
            dispatch(removeItem(id));
            return;
          }
          dispatch(decrease({ id }));
        }}
      >
        <ChevronDown />
      </button>
    </div>
  );
};

export default CartItem;
