import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const { cartItems, total, quantity } = useSelector((store) => store.cart);
  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div>
      <h1
        style={{
          marginTop: "0px",
          marginBottom: "0px",
        }}
      >
        Add Items in Your Cart
      </h1>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <ItemList {...item} />
          </div>
        ))}
      </div>

      <footer>
        <h5>
          <div>
            {quantity >= 1 && (
              <div>
                {quantity} Items:<span>RS {total.toFixed(2)}</span>
              </div>
            )}
          </div>

          <button className="btn" onClick={goToCart}>
            View Cart
          </button>
        </h5>
      </footer>
    </div>
  );
};

export default HomePage;
