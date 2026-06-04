import { useState } from "react";
import { useCart } from "../hooks/useCart";

export default function ProductCard({ product }) {
  const { addToCart, items } = useCart();

  const inCart = items.find((i) => i.id === product.id);

  return (
    <div className="group bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 animate-fadeUp">
      {/* Product image */}
      <div className="overflow-hidden bg-zinc-50 dark:bg-zinc-800 aspect-square">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 gap-3 p-4">
        <h3 className="flex-1 text-sm font-semibold leading-snug text-zinc-800 dark:text-zinc-100 line-clamp-2">
          {product.title}
        </h3>

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
          <div>
            <span className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              ${product.price.toFixed(2)}
            </span>
            {inCart && (
              <span className="ml-2 text-[10px] text-indigo-500 font-medium">
                {inCart.qty} in cart
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product)}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 bg-indigo-500 hover:bg-indigo-600 text-white"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
