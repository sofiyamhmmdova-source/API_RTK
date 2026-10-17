function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="image-box">
        <img src={product.image} alt={product.title} />

        <span className="category">{product.category}</span>
      </div>

      <div className="product-info">
        <h2 title={product.title}>{product.title}</h2>

        <p className="price">${product.price.toFixed(2)}</p>

        <div className="rating">
          <span>⭐ {product.rating?.rate ?? "N/A"}</span>
          <span>{product.rating?.count ?? 0} rəy</span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
