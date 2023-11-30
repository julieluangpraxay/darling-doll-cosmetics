import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCatalog, type Product } from "../lib/api";

export function SearchResults({ searchText, setSearchText }) {
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

  if (isLoading || !products) return <div></div>;
  if (error)
    return (
      <div>
        Error Loading Catalog:{" "}
        {error instanceof Error ? error.message : "Unknown Error"}
      </div>
    );

  const searchedProducts = searchText
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase()),
      )
    : products;

  return (
    <div className="">
      {searchedProducts?.length > 0 ? (
        <ul className="">
          {searchedProducts.map((product) => (
            <li key={product.productId} onClick={() => setSearchText("")}>
              <ProductResults product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <div>No results found for "{searchText}"</div>
      )}
    </div>
  );
}

type CardProps = {
  product: Product;
};

export function ProductResults({ product }: CardProps) {
  const { productId, name, price, imageUrl } = product;

  return (
    <div className="border-b border-black hover:bg-gray-100">
      <Link
        to={`/details/${productId}`}
        className="flex w-1/2 hover:bg-gray-100"
      >
        <div className="flex hover:bg-gray-100">
          <ul className="hover:bg-gray-100 ">
            <li className="hover:bg-gray-100">
              <div className="hover:bg-gray-100">
                <img src={imageUrl} alt={name} className="w-1/2 rounded-3xl" />
                <p>{name}</p>
                <p>${price}</p>
              </div>
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
}
