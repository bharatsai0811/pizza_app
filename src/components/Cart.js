import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartItem from "./CartItem";
import "../styles/Cart.css";
import { Link } from "react-router-dom";
const Cart = () => {
  const [state] = useContext(CartContext);
  let cost = state.cart.reduce((acc, pizza) => {
    return acc + Number(pizza.price) * Number(pizza.qty);
  }, 0);

  return (
    <div className="cart">
      {!state.cart.length && (
        <div className="cartEmpty">
          <h1>Cart is Empty</h1>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
      )}
      {state.cart.length && (
        <div className="cartLeft">
          {state.cart.map((pizza) => {
            return (
              <CartItem
                key={pizza.id}
                id={pizza.id}
                image={pizza.image}
                name={pizza.name}
                price={pizza.price}
                qty={pizza.qty}
              ></CartItem>
            );
          })}
        </div>
      )}
      <div className="total">
        <h1>Total</h1>
        <h3>${cost.toFixed(2)}</h3>
        <button> Check Out.</button>
      </div>
    </div>
  );
};

export default Cart;
