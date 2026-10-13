function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="image-box">
        <img src={product.image} alt={product.name} />
        <span className="category">{product.category}</span>
      </div>

      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">{product.price} AZN</p>

        <button onClick={() => onAddToCart(product)}>+ Add to Cart</button>
      </div>
    </article>
  );
}

export default ProductCard;
