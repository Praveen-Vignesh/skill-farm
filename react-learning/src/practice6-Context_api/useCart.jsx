import { useContext } from 'react'
import { CartContext } from './cartProvider'

// Step 3: Create custom hook for easy access
export const useCart = () => {
  const context = useContext(CartContext)
  
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  
  return context
}
