import React, { useState } from "react";
import { removeItem, increase, decrease } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import "../Cart.css";

const AllProducts = ({ id, title, price, quantity, img, mrp }) => {
  const [showText, setShowText] = useState(false);
  const dispatch = useDispatch();

  return (
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
      {showText && (
        <div className="plusMinusBtn">
          <h3
            onClick={() => {
              dispatch(decrease({ id }));
              if (quantity <= 1) {
                setShowText(false);
              }
            }}
          >
            -
          </h3>
          <h4
            style={{
              color: "#282828",
            }}
          >
            {quantity}
          </h4>

          <h3
            onClick={() => {
              dispatch(increase({ id }));
            }}
          >
            +
          </h3>
        </div>
      )}
      <div>
        <h4 className="headerClass">{title}</h4>
        <h4
          className="headerClass"
          style={{
            color: "#6e6e6e",
          }}
        >
          {quantity}
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
    </div>
  );
};

export default AllProducts;
