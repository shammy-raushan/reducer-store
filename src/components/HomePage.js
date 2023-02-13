import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
import ItemList from "./ItemList";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, total, quantity } = useSelector((store) => store.cart);

  const goToCart = () => {
    navigate("/cart");
  };

  if (quantity < 1) {
    return (
      <section>
        <header>
          <h5>your bag is empty</h5>
        </header>
      </section>
    );
  }

  return (
    <section>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <ItemList {...item} />
          </div>
        ))}
      </div>
      <footer>
        <h5>
          {quantity} Items: <span>RS {total.toFixed(2)}</span>{" "}
          <button onClick={goToCart}>View Cart</button>
        </h5>
      </footer>
    </section>
  );
};

export default HomePage;
