import React, { useState } from "react";
import { removeItem, increase, decrease } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import "../Cart.css";

const ItemList = ({ id, title, price, quantity, img }) => {
  const [showText, setShowText] = useState(false);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="itemContainer">
        <img src={img} />
        {title} .. RS{price}
        {showText && (
          <div
            style={{
              marginTop: "-3px",
              marginLeft: "36px",
            }}
          >
            <button
              onClick={() => {
                dispatch(increase({ id }));
              }}
            >
              +
            </button>
            {quantity}

            <button
              onClick={() => {
                dispatch(decrease({ id }));
                if (quantity <= 1) {
                  setShowText(false);
                }
              }}
            >
              -
            </button>
          </div>
        )}
      </div>
      {!showText ? (
        <div
          className="plusBtn"
          onClick={() => {
            setShowText(true);
            dispatch(increase({ id }));
          }}
        >
          ADD
        </div>
      ) : (
        <div
          style={{
            height: "40px",
            color: "red",
          }}
        ></div>
      )}
    </div>
  );
};

export default ItemList;
