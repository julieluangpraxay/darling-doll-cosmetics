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
    <div className="flex">
      <div className=" m-auto flex columns-3 flex-wrap justify-center ">
        {searchedProducts?.length > 0 ? (
          searchedProducts?.map((product) => (
            <div
              key={product.productId}
              onClick={() => setSearchText("")}
              className="z-50 w-1/4 p-4"
            >
              <ProductResults product={product} />
            </div>
          ))
        ) : (
          <div>No results found for "{searchText}"</div>
        )}
      </div>
    </div>
  );
}

type CardProps = {
  product: Product;
};

export function ProductResults({ product }: CardProps) {
  const { productId, name, price, imageUrl } = product;

  return (
    <>
      <Link to={`/details/${productId}`}>
        <ul>
          <li>
            <div className="">
              <img src={imageUrl} className="" alt={name} />
              <div className="">
                <p className="">{name}</p>
                <div className="">
                  <p className="">${price}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </Link>
    </>
  );
}
