import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, quantity } = useSelector((store) => store.cart);
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
        <button onClick={() => dispatch(openModal())}>clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
