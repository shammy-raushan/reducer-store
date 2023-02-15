import React from "react";
import { removeItem, increase, decrease } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, title, price, quantity, img }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h5>
        <img src={img} />
        {title}... total {title} = {quantity}... {price} each
      </h5>

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
        <h1>+</h1>
      </button>
      <button
        onClick={() => {
          if (quantity === 1) {
            dispatch(removeItem(id));
            return;
          }
          dispatch(decrease({ id }));
        }}
      >
        <h1>_</h1>
      </button>
    </div>
  );
};

export default CartItem;
