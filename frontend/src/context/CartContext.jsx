import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // Look for the item by its NAME instead of ID
    const exist = cartItems.find((i) => i.name === item.name);

    if (exist) {
      setCartItems(
        cartItems.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (name) => {
    // Look for the item by its NAME instead of ID
    const exist = cartItems.find((i) => i.name === name);

    if (exist?.quantity === 1) {
      setCartItems(cartItems.filter((i) => i.name !== name));
    } else if (exist) {
      setCartItems(
        cartItems.map((i) =>
          i.name === name ? { ...i, quantity: i.quantity - 1 } : i
        )
      );
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;