import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";
import { useDispatch } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h4>remove all items</h4>
      <div>
        <button
          onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
        >
          confirm
        </button>
        <button
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          {" "}
          cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
