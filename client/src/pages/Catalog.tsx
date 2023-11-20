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

  if (isLoading) return <div></div>;
  if (error)
    return (
      <div>
        Error Loading Catalog:{" "}
        {error instanceof Error ? error.message : "Unknown Error"}
      </div>
    );
  return (
    <div>
      <div className="m-0 h-full columns-3">
        {products?.map((product) => (
          <div key={product.productId}>
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
  const { productId, name, price, imageUrl } = product;
  return (
    <>
      {/* <div className="m-0 mb-11 mr-5 flex basis-1/4 columns-4 flex-col py-8 text-center lg:mr-16">
        <Link to={`/details/${productId}`}>
          <div className="card-container">
            <img src={imageUrl} className="rounded-3xl" alt={name} />
            <h5>{name}</h5>
            <p>${price}</p>
          </div>
        </Link>
      </div> */}
      <Link to={`/details/${productId}`}>
        <div className="m-auto my-12 w-64 rounded-2xl bg-white p-2 shadow-lg">
          <img src={imageUrl} className="rounded-3xl" alt={name} />

          <div className="m-3 rounded-lg bg-pink-200 p-4">
            <p className="text-s font-bold text-white ">{name}</p>
            <div className="flex items-center justify-between ">
              <p className="text-white">${price}</p>
              <button
                type="button"
                className="h-8 w-8 rounded-full bg-pink-500 text-base font-medium text-white hover:bg-pink-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
