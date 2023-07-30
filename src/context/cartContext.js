import { createContext, useReducer } from "react";
export const CartContext = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "AddToCart": {
      const existingItemIndex = state.cart.findIndex(
        (pizza) => action.payload.id === pizza.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].qty += 1;
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qty: 1 }],
        };
      }
    }
    case "Remove": {
      const cart = state.cart.filter((pizza) => {
        return action.payload.id !== pizza.id;
      });
      return {
        cart,
      };
    }
    case "QunatityChange": {
      const cart = [...state.cart];
      const { id, qty } = action.payload;
      const itemIndex = cart.findIndex((pizza) => pizza.id === id);

      if (itemIndex !== -1) {
        cart[itemIndex].qty = qty || 0;
      }
      return {
        ...state,
        ...cart,
      };
    }
    default:
      return state;
  }
}
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    cart: [],
  });
  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
