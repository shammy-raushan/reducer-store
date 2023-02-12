import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
// import cartItems from "../cartItems";
import { clearCart } from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <section>
        <header>
          <h2>your bag</h2>
          <h4>is empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section>
      <header>
        <h2>your bag </h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return (
            <>
              <CartItem key={item.id} {...item} />
            </>
          );
        })}
      </div>
      <footer>
        {" "}
        <h4>
          total <span>RS {total.toFixed(2)}</span>
        </h4>
        <button onClick={() => dispatch(openModal())}>clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
