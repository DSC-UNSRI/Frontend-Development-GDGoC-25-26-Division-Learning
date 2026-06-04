import { useCart } from "../hooks/useCart";

export default function CartSidebar() {
  const { items, removeFromCart, clearCart, totalItems, totalPrice } = useCart();

  return (
    <aside className="w-80 shrink-0 h-[calc(100vh-4rem)] sticky top-16 bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 flex flex-col">
      {/* Header */}
      <div className="px-5 py-4 border-b border-zinc-100 dark:border-zinc-800">
        <h2 className="text-lg font-bold font-display text-zinc-900 dark:text-zinc-100">
          Cart
        </h2>
        <p className="text-xs text-zinc-400 mt-0.5">
          {totalItems} items
        </p>
      </div>

      {/* Items */}
      <div className="flex-1 px-5 py-4 space-y-3 overflow-y-auto scrollbar-hide">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full gap-3 py-16 text-center">
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              Your cart is empty
            </p>
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 p-3 border rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border-zinc-100 dark:border-zinc-800"
            >
              {/* Details */}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold leading-snug text-zinc-800 dark:text-zinc-200 line-clamp-2">
                  {item.title}
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  qty: {item.qty} · ${(item.price * item.qty).toFixed(2)}
                </p>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-zinc-300 dark:text-zinc-600 hover:text-rose-500 dark:hover:text-rose-500 transition-colors self-start mt-0.5"
                aria-label="Remove item"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {items.length > 0 && (
        <div className="px-5 py-4 space-y-3 border-t border-zinc-100 dark:border-zinc-800">
          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Total</span>
            <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <button
            onClick={clearCart}
            className="w-full text-xs font-medium transition-colors text-zinc-400 hover:text-rose-500"
          >
            Clear cart
          </button>
        </div>
      )}
    </aside>
  );
}
