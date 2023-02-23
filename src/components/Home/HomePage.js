import { useSelector } from "react-redux";
import AllProducts from "./AllProducts";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const { cartItems, total, quantity, discount } = useSelector(
    (store) => store.cart
  );
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
              <AllProducts {...item} />
            </div>
          ))}
        </div>
        {quantity >= 1 && (
          <div className="viewCartBtn">
            <div
              style={{
                textAlign: "center",
                background: "#12877f",
                color: "white",
                padding: "5px",
                marginBottom: "10px",
              }}
            >
              <h5
                style={{
                  marginTop: "0",
                  marginBottom: "10px",
                }}
              >
                YOU SAVED &nbsp;Rs{discount} ON THIS ORDER!
              </h5>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <h3>
                RS {total.toFixed(2)} | {quantity}&nbsp;
                {quantity === 1 ? "item" : "items"}
              </h3>
              <button className="btn" onClick={goToCart}>
                View &nbsp;Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
