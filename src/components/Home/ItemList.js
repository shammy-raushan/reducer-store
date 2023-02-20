import React, { useState } from "react";
import { removeItem, increase, decrease } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import "../Cart.css";
import ADD from "../../../src/assets/AddBtn.png";

const ItemList = ({ id, title, price, quantity, img, mrp }) => {
  const [showText, setShowText] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="itemContainer">
      <div className="imgContainer">
        <img src={img} />{" "}
        {!showText ? (
          <div
            className="plusBtn"
            onClick={() => {
              setShowText(true);
              dispatch(increase({ id }));
            }}
          >
            <h2 className="plusSymbol">+</h2>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div
        style={{
          marginBottom: "10px",
        }}
      >
        <h4
          className="headerClass"
          style={{
            marginTop: "-13px",
          }}
        >
          {title}
        </h4>
        <h4
          className="headerClass"
          style={{
            color: "#6e6e6e",
          }}
        >
          {quantity}{" "}
        </h4>
        <h4 className="headerClass">
          Rs{price} &nbsp;
          <s
            style={{
              color: "#6e6e6e",
            }}
          >
            Rs{mrp}
          </s>
        </h4>
      </div>
      <div className="plusMinusBtn">
        {showText && (
          <div
            style={{
              marginTop: "-3px",
              marginLeft: "36px",
            }}
          >
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
            {quantity}

            <button
              onClick={() => {
                dispatch(increase({ id }));
              }}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemList;
