import Body from './body'
import CartProvider from './cartProvider'

const App = () => {
  return (
    <CartProvider>
      <div>
        <h1>🛒 Context API - Shopping Cart Demo</h1>
        <Body />
      </div>
    </CartProvider>
  )
}

export default App
