import React from "react";
import "./Cart.css";
const CartItem = (props) => {
  const price = `₹${props.price}`;
  return (
    <>
      <div className="cartAmount">
        <h2
          style={{
            fontWeight: "normal",
            fontSize: "25px",
            fontStyle: "italic",
          }}
        >
          {props.medicine}
        </h2>
        <div className="amountDiv">
          <span style={{backgroundColor:"rgb(67, 210, 210)"}}>{price}</span>
          <span style={{ backgroundColor: "rgb(67, 210, 210)" }}>
            x{props.amount}
          </span>
        </div>
      </div>
      <div className="divv">
        <button
          className="btn4"
          style={{ marginLeft: "1.2em" }}
          onClick={props.onRemove}
        >
          -
        </button>
        <button
          className="btn4"
          style={{ marginLeft: "3em" }}
          onClick={props.onAdd}
        >
          +
        </button>
      </div>
    </>
  );
};

export default CartItem;

