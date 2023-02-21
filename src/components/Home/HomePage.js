import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useNavigate } from "react-router-dom";
import { Grid } from "@material-ui/core";
const HomePage = () => {
  const navigate = useNavigate();
  const { cartItems, total, quantity } = useSelector((store) => store.cart);
  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <div className="heading">Fruits and Vegetables </div>
      <div
        style={{
          background: "#F9F9F9",
        }}
      >
        <hr />
        <div className="subHeading">ALL ITEMS</div>

        <div className="itemContainer">
          {cartItems.map((item) => (
            <div key={item.id}>
              <ItemList {...item} />
            </div>
          ))}
        </div>
        {quantity >= 1 && (
          <div className="viewCartBtn">
            <h3>
              RS {total.toFixed(2)} | {quantity}&nbsp;
              {quantity === 1 ? "item" : "items"}
            </h3>
            <button className="btn" onClick={goToCart}>
              View &nbsp;Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
