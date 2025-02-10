import { createContext, useReducer } from "react";
import { addItem, removeItem } from "./Cart.utils";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const { item } = action.payload;
      return addItem(state, item);
    case "REMOVE_ITEM":
      const { id } = action.payload;
      return removeItem(state, id);
  }

  return state;
}

export function CartContextProvider({ children }) {
  useReducer(cartReducer, { items: [] });
  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
