import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <>
      <nav>
        <div>
          <h3>Navbar</h3>
          <CartIcon />
          <p>{amount}</p>
        </div>
      </nav>{" "}
    </>
  );
};

export default Navbar;
