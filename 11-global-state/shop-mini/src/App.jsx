import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen transition-colors duration-300 bg-zinc-50 dark:bg-zinc-950">
          <Navbar />
          <div className="flex">
            <div className="flex-1 min-w-0">
              <ProductsPage />
            </div>
            <CartSidebar />
          </div>
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}
