import React, { useContext } from 'react';
import './Items.css';
import Form from './Form';
import CartContext from './CartContext';
const Item = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      medicine: props.medicine,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div className="item">
      <h2>{props.medicine}</h2>
      <p className="itemDescription">{props.discription}</p>
      <div className="amountItem">
        <h2>₹{props.price}</h2>
      </div>
      <Form onAddToCart={addToCartHandler} />
    </div>
  );
};

export default Item;
