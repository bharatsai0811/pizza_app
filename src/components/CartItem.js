import React, { useContext } from "react";
import { useState } from "react";
import "../styles/CartItem.css";
import { CartContext } from "../context/cartContext";

const CartItem = ({ id, image, name, price, qty, remove }) => {
  const [quantity, setQuantity] = useState(qty);

  const [state, dispatch] = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={image} alt={name} />
      <div className="pizza-details">
        <div className="pizza-name">{name}</div>
        <div className="pizza-price">${price}</div>
      </div>
      <div className="pizza-quantity">
        Quantity:
        <input
          onChange={(event) => {
            setQuantity(Number(event.target.value) || 0);
            const newQuantity = Number(event.target.value) || 0;
            dispatch({
              type: "QunatityChange",
              payload: {
                id,
                image,
                name,
                price,
                qty: newQuantity,
              },
            });
          }}
          value={quantity}
        ></input>
        <button
          onClick={() =>
            dispatch({
              type: "Remove",
              payload: {
                id,
                image,
                name,
                price,
                qty,
              },
            })
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
