import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCatalog, type Product } from "../lib/api";

export function Catalog({ searchText }) {
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

  const searchedProducts = products.filter((product) =>
    product.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()),
  );

  return (
    <div className="flex">
      <div className="m-auto flex columns-3 flex-wrap justify-center space-x-8 p-8">
        {searchedProducts?.length > 0 ? (
          searchedProducts?.map((product) => (
            <div key={product.productId}>
              <ProductCard product={product} />
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

function ProductCard({ product }: CardProps) {
  const { productId, name, price, imageUrl } = product;
  return (
    <>
      <Link to={`/details/${productId}`}>
        <div className="m-auto my-12 w-80 rounded-2xl bg-white p-2 shadow-lg">
          <img src={imageUrl} className="rounded-3xl" alt={name} />

          <div className="m-3 rounded-lg bg-pink-200 p-4">
            <p className="text-s font-bold text-black ">{name}</p>
            <div className="flex items-center justify-between ">
              <p className="text-black">${price}</p>
              <button
                type="button"
                className="h-6 w-6 rounded-full bg-pink-500 text-base font-medium text-white hover:bg-pink-700 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className="mx-auto"
                  fill="white"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
