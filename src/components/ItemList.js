import React, { useState } from "react";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ id, title, price, quantity, img }) => {
  //   const [tab, setTab] = useState(0);
  const [showText, setShowText] = useState(false);

  const dispatch = useDispatch();
  console.log(quantity);

  //   const handleChangeTab = (data) => {
  //     console.log("newValue", data);
  //     setTab(data);
  //   };

  // if (quantity < 1) {
  //   <h1> empty.......</h1>;
  // } else {
  return (
    <div>
      <div
        style={{
          height: "120px",
          width: "100px",
          background: "gray",
        }}
      >
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
        <div onClick={() => setShowText(!showText)}>+</div>
      ) : (
        <div
          style={{
            height: "40px",
            color: "red",
          }}
        ></div>
      )}

      {/* <div className= {`${tab === 0}`} onClick={(e) => handleChangeTab(0)}>
         h 
      </div> */}

      {/* <div className={`${tab === 1}`} onClick={(e) => handleChangeTab(1)}>
        +{" "}
      </div> */}

      {/* {tab === 0 && <div></div>} */}
    </div>
  );
};
// };

export default ItemList;
