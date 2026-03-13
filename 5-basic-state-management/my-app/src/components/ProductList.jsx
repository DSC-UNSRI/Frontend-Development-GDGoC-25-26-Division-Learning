import ProductCard from "./ProductCard"
import products from "../constant/products"

function ProductList({ onAddToCart }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}

export default ProductList