import Products from './products'
import MyCart from './myCart'

const Body = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', padding: '20px' }}>
      <Products />
      <MyCart />
    </div>
  )
}

export default Body