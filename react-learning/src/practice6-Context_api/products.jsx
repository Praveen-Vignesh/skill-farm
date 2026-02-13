import { useCart } from './useCart'

// Demo: Products component - NO PROP DRILLING! 👍
const Products = () => {
  // Access context directly without props
  const { PRODUCTS, addToCart, favoriteCategory, setFavoriteCategory } = useCart()

  const filteredProducts = favoriteCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === favoriteCategory)

  return (
    <div>
      <h2>Products</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <label>Filter by category: </label>
        <select value={favoriteCategory} onChange={(e) => setFavoriteCategory(e.target.value)}>
          <option>All</option>
          <option>Electronics</option>
          <option>Furniture</option>
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {filteredProducts.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '15px' }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
