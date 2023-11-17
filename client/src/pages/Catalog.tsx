import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCatalog, type Product } from "../lib/api";

export function Catalog() {
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadCatalog() {
      try {
        const products = await fetchCatalog();
        setProducts(products);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    loadCatalog();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        Error Loading Catalog:{" "}
        {error instanceof Error ? error.message : "Unknown Error"}
      </div>
    );
  return (
    <div className="container">
      <h1>Catalog</h1>
      <hr />
      <div className="row">
        {products?.map((product) => (
          <div key={product.productId} className="col-12 col-md-6 col-lg-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  product: Product;
};
function ProductCard({ product }: CardProps) {
  const { productId, name, price, imageUrl, description } = product;
  return (
    <Link
      to={`/details/${productId}`}
      className="product text-dark card text-decoration-none mb-4 shadow-sm"
    >
      {/* TODO: Instead of a div, the above should link to `/details/:productId` */}
      <img src={imageUrl} className="image card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-secondary">{price}</p>
        <p className="description card-text">{description}</p>
      </div>
    </Link>
  );
}
