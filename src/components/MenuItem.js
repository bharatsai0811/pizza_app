import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
const MenuItem = ({ id, image, name, price }) => {
  const [state, dispatch] = useContext(CartContext);
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>${price}</p>
      <button
        className="pass"
        onClick={() =>
          dispatch({
            type: "AddToCart",
            payload: {
              id,
              image,
              name,
              price,
              qty: 0,
            },
          })
        }
      >
        Add to Cart
      </button>
      <button
        id="danger"
        onClick={() =>
          dispatch({
            type: "Remove",
            payload: {
              id,
              image,
              name,
              price,
            },
          })
        }
      >
        Remove
      </button>
    </div>
  );
};

export default MenuItem;
