import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import SkeletonCard from "../components/SkeletonCard";

export default function ProductsPage() {
  const { products, loading, error } = useProducts();

  return (
    <main className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold font-display text-zinc-900 dark:text-zinc-100">
          Products
        </h1>
      </div>

      {error && (
        <p className="text-sm text-zinc-400">{error}</p>
      )}

      {loading && !error && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}