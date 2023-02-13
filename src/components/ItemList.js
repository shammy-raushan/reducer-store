import React from "react";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ id, title, price, quantity, img }) => {
  const [tab, setTab] = React.useState(0);
  const dispatch = useDispatch();

  const handleChangeTab = (data) => {
    console.log("newValue", data);
    setTab(data);
  };

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
        {tab === 1 && (
          <div
            style={{
              marginTop: "-3px",
              marginLeft: "40px",
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
              }}
            >
              -
            </button>
          </div>
        )}
      </div>
      <div className={`${tab === 0}`} onClick={(e) => handleChangeTab(0)}>
        {/* h */}
      </div>
      <div className={`${tab === 1}`} onClick={(e) => handleChangeTab(1)}>
        +{" "}
      </div>

      {tab === 0 && <div></div>}
    </div>
  );
};

export default ItemList;
