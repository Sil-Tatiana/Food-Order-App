import React from "react";

const CartContext = React.createContext({
    // The default value is an object with the following properties: 
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
