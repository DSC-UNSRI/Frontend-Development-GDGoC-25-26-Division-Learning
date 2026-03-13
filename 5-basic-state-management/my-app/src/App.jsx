import { useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import ProductList from "./components/ProductList"

function App() {

  const [cartCount, setCartCount] = useState(0)

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar cartCount={cartCount} />

      <div className="mx-auto max-w-5xl p-8">
        <ProductList onAddToCart={handleAddToCart} />
      </div>

    </div>
  )
}

export default App