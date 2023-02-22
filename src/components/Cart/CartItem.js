import React, { useState } from "react";
import { removeItem, increase, decrease } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import "../Cart.css";
import ADD from "../../../src/assets/AddBtn.png";

const CartItem = ({ id, title, price, quantity, img, mrp }) => {
  const [showText, setShowText] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      {quantity >= 1 && (
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            className="cartImgContainer"
            style={{
              marginLeft: "5%",
              width: "40%",
              display: "flex",
            }}
          >
            <img src={img} className="cartImg" />
            <div
              style={{
                marginLeft: "15%",
              }}
            >
              <h4 className="cartHeader">{title}</h4>
              <h4
                className="cartHeader"
                style={{
                  color: "#6e6e6e",
                }}
              >
                {quantity}
              </h4>
            </div>
          </div>

          <div
            style={{
              marginLeft: "12%",
            }}
          >
            {!showText ? (
              <div
                className="cartPlusBtn"
                onClick={() => {
                  setShowText(true);
                  dispatch(increase({ id }));
                }}
              >
                <h2 className="cartPlusSymbol">+</h2>
              </div>
            ) : (
              <div></div>
            )}
            {showText && (
              <div className="cartPlusMinusBtn">
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
          </div>

          <div
            style={{
              textAlign: "center",
              width: "40%",
            }}
          >
            <h4 className="headerClass">Rs{price} </h4>{" "}
            <s
              style={{
                color: "#6e6e6e",
              }}
            >
              Rs{mrp}
            </s>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItem;
