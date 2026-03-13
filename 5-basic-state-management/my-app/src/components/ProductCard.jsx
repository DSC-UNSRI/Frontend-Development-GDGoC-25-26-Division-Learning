import { useState } from "react"

function ProductCard({ product, onAddToCart }) {
  const [liked, setLiked] = useState(false)
  const [showDetail, setShowDetail] = useState(false)

  return (
    <div className="flex flex-col gap-3 rounded-xl border bg-white p-5 shadow-sm">

      <h2 className="text-lg font-semibold">
        {product.name}
      </h2>

      <p className="text-gray-500">
        {product.price}
      </p>

      <div className="flex gap-2">

        <button
          onClick={() => setLiked(!liked)}
          className="rounded bg-gray-100 px-3 py-1 text-sm"
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>

        <button
          onClick={() => setShowDetail(!showDetail)}
          className="rounded bg-gray-100 px-3 py-1 text-sm"
        >
          Details
        </button>

      </div>

      {showDetail && (
        <p className="text-sm text-gray-600">
          {product.description}
        </p>
      )}

      <button
        onClick={onAddToCart}
        className="mt-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Add to Cart
      </button>

    </div>
  )
}

export default ProductCard