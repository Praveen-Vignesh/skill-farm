import React, { createContext, useState } from 'react'

const PRODUCTS = [
  { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
  { id: 2, name: 'Phone', price: 699, category: 'Electronics' },
  { id: 3, name: 'Headphones', price: 199, category: 'Electronics' },
  { id: 4, name: 'Desk Chair', price: 299, category: 'Furniture' },
  { id: 5, name: 'Monitor', price: 399, category: 'Electronics' },
  { id: 6, name: 'Keyboard', price: 89, category: 'Electronics' },
];

// Step 1: Create the context
export const CartContext = createContext()

// Step 2: Create provider component
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [favoriteCategory, setFavoriteCategory] = useState('All')
    const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const value = {
    PRODUCTS,
    cart,
    favoriteCategory,
    addToCart,
    removeFromCart,
    updateQuantity,
    setFavoriteCategory,
    getTotalItems,
    getTotalPrice
  };

  return(
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider
