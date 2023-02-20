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

        {cartItems.map((item) => (
          <div key={item.id}>
            <ItemList {...item} />
          </div>
        ))}

        <div>
          {quantity >= 1 && (
            <div>
              {quantity} Items:<span>RS {total.toFixed(2)}</span>
            </div>
          )}
        </div>

        <button className="btn" onClick={goToCart}>
          VIEW &nbsp;CART
        </button>
      </div>
    </>
  );
};

export default HomePage;
