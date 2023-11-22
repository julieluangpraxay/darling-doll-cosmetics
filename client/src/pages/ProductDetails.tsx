import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchImages,
  fetchProduct,
  ProductImage,
  type Product,
} from "../lib/api";

export function ProductDetails() {
  // Retrieve productId from the route
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [images, setImages] = useState<ProductImage[]>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    async function loadProduct(productId: number) {
      try {
        const product = await fetchProduct(productId);
        const productImage = await fetchImages(productId);

        setProduct(product);
        setImages(productImage);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) {
      setIsLoading(true);
      loadProduct(+productId);
    }
  }, [productId]);

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        Error Loading Product {productId}:{" "}
        {error instanceof Error ? error.message : "Unknown Error"}
      </div>
    );
  if (!product) return null;

  const { name, imageUrl, price, description, ingredients } = product;

  function handleMiniPhotoClick(index) {
    setCurrentImageIndex(index);
  }

  function renderMiniPhotos() {
    return images?.map((image, index) => (
      <img
        key={image.imageUrl}
        src={image.imageUrl}
        alt={`Mini ${index}`}
        className={`w-1/2 py-4 ${
          index === currentImageIndex ? "border-pink-400" : "border-pink-400"
        }`}
        onClick={() => handleMiniPhotoClick(index)}
      />
    ));
  }

  return (
    <div className="container flex flex-row">
      <div className="container p-4">
        <div className="flex">
          <div className="basis-1/4">
            {/* MINI SIDE PHOTOS */}
            <div className="w-full">{renderMiniPhotos()}</div>
          </div>
          {/* MAIN PICTURE */}
          <div className="basis-3/4">
            <img
              src={images?.[currentImageIndex]?.imageUrl || imageUrl}
              alt={name}
              className="columns-lg rounded-3xl p-4"
            />
          </div>
        </div>
      </div>

      <div className="w-1/2 justify-center p-4">
        <div className="basis-1/2 p-4">
          <h2 className="mb-1 text-4xl font-black">{name}</h2>
          <h5 className="mb-4 block text-2xl font-black text-green-500">
            ${price}
          </h5>
          <a
            href="#"
            className="bg-blueGray-900 group relative mb-4 inline-block h-12 w-full rounded-md"
          >
            <div className="absolute left-0 top-0 h-full w-full -translate-x-1 -translate-y-1 transform transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
              <div className="flex h-full w-full items-center justify-center rounded-md border-2 border-black bg-pink-400">
                <span className="text-base font-black text-black">
                  ADD TO CART
                </span>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="mb-5 inline-flex w-full items-center justify-center text-black transition duration-200 hover:text-indigo-500"
          >
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-config-id="auto-svg-4-2"
            >
              <path
                d="M14.44 0.0999756C12.63 0.0999756 11.01 0.979976 10 2.32998C8.99 0.979976 7.37 0.0999756 5.56 0.0999756C2.49 0.0999756 0 2.59998 0 5.68998C0 6.87998 0.19 7.97998 0.52 8.99998C2.1 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 8.99998C19.81 7.97998 20 6.87998 20 5.68998C20 2.59998 17.51 0.0999756 14.44 0.0999756Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="ml-2 text-sm font-black">ADD TO FAVORITES</span>
          </a>
          {/* accordian 1 */}
          <div className="ml-2 text-sm font-black">
            <button className="group flex w-full flex-wrap items-center justify-between border-b-2 border-black px-6 py-5 text-left">
              <span className="text-sm font-black">DESCRIPTION</span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-config-id="auto-svg-5-2"
              >
                <path
                  d="M8.94674 0.453369H4.79341H1.05341C0.41341 0.453369 0.0934098 1.2267 0.546743 1.68004L4.00008 5.13337C4.55341 5.6867 5.45341 5.6867 6.00674 5.13337L7.32008 3.82004L9.46008 1.68004C9.90674 1.2267 9.58674 0.453369 8.94674 0.453369Z"
                  fill="black"
                ></path>
              </svg>
              <div className="mt-4 hidden group-hover:block">
                <p className="text-xs font-bold">{description}</p>
              </div>
            </button>
          </div>
          {/* accordian 2 */}
          <div className="ml-2 text-sm font-black">
            <button className="group flex w-full flex-wrap items-center justify-between border-b-2 border-black px-6 py-5 text-left">
              <span className="text-sm font-black">INGREDIENTS</span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-config-id="auto-svg-5-2"
              >
                <path
                  d="M8.94674 0.453369H4.79341H1.05341C0.41341 0.453369 0.0934098 1.2267 0.546743 1.68004L4.00008 5.13337C4.55341 5.6867 5.45341 5.6867 6.00674 5.13337L7.32008 3.82004L9.46008 1.68004C9.90674 1.2267 9.58674 0.453369 8.94674 0.453369Z"
                  fill="black"
                ></path>
              </svg>
              <div className="mt-4 hidden group-hover:block">
                <p className="text-xs font-bold">{ingredients}</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
