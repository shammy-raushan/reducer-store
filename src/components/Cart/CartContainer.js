import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/modal/modalSlice";
import { useNavigate } from "react-router-dom";
import "../Cart.css";

const CartContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, total, quantity } = useSelector((store) => store.cart);

  const goToHome = () => {
    navigate("/");
  };
  if (quantity < 1) {
    return (
      <section>
        <header>
          <h3>your don't have any items in cart</h3>
          <h5>your favourite items are just a click away</h5>
          <button className="btn" onClick={goToHome}>
            Start Shopping
          </button>
        </header>
      </section>
    );
  }

  return (
    <section>
      <header>
        <p>Total items in Cart = {quantity}</p>
      </header>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <CartItem {...item} />
          </div>
        ))}
      </div>
      <footer>
        <h5>
          total <span>RS {total.toFixed(2)}</span>
        </h5>
        <button className="btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
