import { useCart } from './useCart'

// Demo: Cart component - NO PROP DRILLING! 👍
const MyCart = () => {
  // Access context directly without props
  const { cart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart()

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total items: {getTotalItems()}</p>

      <div style={{ marginBottom: '20px' }}>
        {cart.map(item => (
          <div 
            key={item.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              padding: '10px', 
              borderBottom: '1px solid #ddd' 
            }}
          >
            <div>
              <strong>{item.name}</strong> - ${item.price}
            </div>
            <div>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span style={{ margin: '0 10px' }}>Qty: {item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '20px' }}>Remove</button>
            </div>
            <div>${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>

      <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
    </div>
  )
}

export default MyCart
