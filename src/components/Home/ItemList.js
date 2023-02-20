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
        {quantity >= 0 && showText && (
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
                quantity >= 1 && dispatch(decrease({ id }));
              }}
            >
              -
            </button>
          </div>
        )}
      </div>
      {quantity == 0 ? (
        <div className="plusBtn" onClick={() => setShowText(!showText)}>
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
