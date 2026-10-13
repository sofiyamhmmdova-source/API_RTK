import { useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Qulaqlıq",
    price: 35,
    category: "Elektronika",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 2,
    name: "Ağıllı saat",
    price: 80,
    category: "Aksesuar",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
  },
  {
    id: 3,
    name: "Fotoaparat",
    price: 250,
    category: "Elektronika",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
  },
  {
    id: 4,
    name: "İdman ayaqqabısı",
    price: 65,
    category: "Geyim",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
  },
];

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((previousCart) => [...previousCart, product]);
  }

  return (
    <main className="app">
      <header className="header">
        <h1>Məhsul adı</h1>
        <div className="cart-count">🛍️ Səbət: {cart.length} məhsul</div>
      </header>

      <section className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
