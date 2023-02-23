import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../features/modal/modalSlice";
import { useNavigate } from "react-router-dom";
import "../Cart.css";

const CartContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, total, quantity, totalMrp, discount } = useSelector(
    (store) => store.cart
  );

  const goToHome = () => {
    navigate("/");
  };
  if (quantity < 1) {
    return (
      <header>
        <h3>your don't have any items in cart</h3>
        <h5>your favourite items are just a click away</h5>
        <button className="btn" onClick={goToHome}>
          Start Shopping
        </button>
      </header>
    );
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 24px",
        }}
      >
        <h3>Review Items</h3>
        <h4
          style={{
            color: "#6e6e6e",
          }}
        >
          {quantity} ITEMS
        </h4>
      </div>
      <div className="cartItemContainer">
        {cartItems.map((item) => (
          <div key={item.id}>
            <CartItem {...item} />
          </div>
        ))}
      </div>

      <div
        style={{
          position: "sticky",
        }}
      >
        <div
          className="viewBill"
          // style={{
          //   justifyContent: "space-between",
          //   padding: "16px",
          //   marginTop: "19%",
          //   position: "sticky",
          // }}
        >
          <hr />
          <h3>Bill details</h3>
          <div className="footerBill">
            <h4>Item Total</h4>
            <h4>Rs{totalMrp}</h4>
          </div>
          <div
            className="footerBill"
            style={{
              color: "#278829",
            }}
          >
            <h4>Discount</h4>
            <h4>-Rs{discount}</h4>
          </div>
          <hr />
          <div className="footerBill">
            <h4>Grand Total</h4>
            <h4>Rs{total.toFixed(2)}</h4>
          </div>
          <button
            className="btn"
            onClick={() => dispatch(openModal())}
            style={{
              width: "100% ",
              justifyContent: "center",
            }}
          >
            {/* clear cart */}
            Continue to Payment
          </button>
        </div>
      </div>
    </>
  );
};

export default CartContainer;
