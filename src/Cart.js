import { useContext } from "react";
import CartContext from "./CartContext";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;
  const removeItemFromCartHandler = (id) => {
    cartCtx.removeItem(id)
  };
  const addItemToCartHandler = (item) => {
    cartCtx.addItem(item)
  };
  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          <CartItem
            key={item.id}
            medicine={item.medicine}
            amount={item.amount}
            price={item.price}
            onRemove={removeItemFromCartHandler.bind(null, item.id)}
            onAdd={addItemToCartHandler.bind(null, item)}
          />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="cart2">
      {cartItems}
      <div style={{ backgroundColor: "rgb(67, 210, 210)" }}>
        <span className="span3">Tatal Amount</span>
        <span className="span3">{totalAmount}</span>
      </div>
      <button className="btn2" onClick={props.onClose}>
        Close
      </button>
      {hasItem && <button className="btn3">Order</button>}
    </div>
  );
};
export default Cart;
