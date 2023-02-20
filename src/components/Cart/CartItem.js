import React from "react";
import { removeItem, increase, decrease } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import "../Cart.css";

const CartItem = ({ id, title, price, quantity, img }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="itemContainer">
        <img src={img} />
        {title}
        Rs{price}
      </div>
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <button
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          +{" "}
        </button>
        {quantity}
        <button
          onClick={() => {
            if (quantity === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          -{" "}
        </button>{" "}
        <button
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
    </>
  );
};

export default CartItem;
