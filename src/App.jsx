import { useGetProductsQuery } from "./services/productsApi";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useGetProductsQuery();

  if (isLoading) {
    return (
      <div className="status">
        <div className="loader"></div>
        <h2>Məhsullar yüklənir...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="status error">
        <h2>❌ Xəta baş verdi!</h2>
        <p>
          {error?.error ||
            `Sorğu uğursuz oldu: ${error?.status ?? "Naməlum xəta"}`}
        </p>
        <button onClick={() => window.location.reload()}>Yenidən yoxla</button>
      </div>
    );
  }

  return (
    <main className="app">
      <header className="header">
        <div>
          <h1>Məhsullar</h1>
        </div>
      </header>

      <section className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}

export default App;
