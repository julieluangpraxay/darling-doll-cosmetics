import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {
  fetchImages,
  fetchProduct,
  ProductImage,
  type Product,
  addToCart,
  addToFavorites,
} from "../lib/api";
type CartContextType = {
  cartQuantity: number;
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
};
export function ProductDetails({ CartContext }) {
  // Retrieve productId from the route
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [images, setImages] = useState<ProductImage[]>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { cartQuantity, setCartQuantity } =
    useContext<CartContextType>(CartContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isIngredientsOpen, setIsIngredientsOpen] = useState(false);

  function toggleShipping() {
    setIsShippingOpen(!isShippingOpen);
  }
  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
    if (isIngredientsOpen) {
      setIsIngredientsOpen(false);
    }
  };

  const toggleIngredients = () => {
    setIsIngredientsOpen(!isIngredientsOpen);
    if (isDescriptionOpen) {
      setIsDescriptionOpen(false);
    }
  };

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
      <div className="m-0 flex w-full">
        <img
          key={image.imageUrl}
          src={image.imageUrl}
          alt={`Mini ${index}`}
          className={"w-3/4 rounded-xl"}
          onClick={() => handleMiniPhotoClick(index)}
        />
      </div>
    ));
  }

  async function handleAddToCart() {
    if (!productId) return;
    try {
      await addToCart(+productId);
      setCartQuantity(cartQuantity + 1);
      setIsAddedToCart(true);
    } catch (err) {
      setError(err);
    }
  }

  async function handleAddToFavorites() {
    if (!productId) return;
    try {
      await addToFavorites(+productId);
      setIsAddedToFavorites(true);
    } catch (err) {
      setError(err);
    }
  }

  return (
    <>
      <div>
        <section className="py-18">
          <div className="container m-0 ">
            <div className="mx-auto max-w-lg lg:max-w-6xl">
              <div className="mb-4 ml-12 mt-8 flex h-16 flex-wrap items-center py-4 pt-8">
                <Link
                  to="/home"
                  className="inline-block text-sm font-bold text-black"
                >
                  HOME
                </Link>
                <span className="mx-3">
                  <svg
                    width={6}
                    height={10}
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.453338 1.05338L0.453338 5.20671L0.453339 8.94671C0.453339 9.58671 1.22667 9.90671 1.68001 9.45338L5.13334 6.00005C5.68667 5.44671 5.68667 4.54671 5.13334 3.99338L3.82 2.68005L1.68001 0.540046C1.22667 0.093379 0.453338 0.41338 0.453338 1.05338Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <Link
                  to="/catalog"
                  className="inline-block text-sm font-bold text-black"
                >
                  PRODUCTS
                </Link>
                <span className="mx-3">
                  <svg
                    width={6}
                    height={10}
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.453338 1.05338L0.453338 5.20671L0.453339 8.94671C0.453339 9.58671 1.22667 9.90671 1.68001 9.45338L5.13334 6.00005C5.68667 5.44671 5.68667 4.54671 5.13334 3.99338L3.82 2.68005L1.68001 0.540046C1.22667 0.093379 0.453338 0.41338 0.453338 1.05338Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <Link
                  to={`/details/${productId}`}
                  className="inline-block text-sm font-bold text-pink-500"
                >
                  {name}
                </Link>
              </div>
              <div className="mx-4 flex flex-wrap">
                <div className="mb-14 w-full px-4 lg:mb-0 lg:w-3/5">
                  <div className="container m-auto w-full">
                    <div className="flex w-full">
                      {/* MAIN PICTURE */}
                      <div className="flex">
                        <img
                          src={
                            images?.[currentImageIndex]?.imageUrl || imageUrl
                          }
                          alt={name}
                          className=" w-11/12 rounded-3xl p-4"
                        />
                      </div>
                    </div>
                    <div className="flex w-full">
                      {/* MINI SIDE PHOTOS */}
                      <div className="align-center flex w-full flex-nowrap justify-center">
                        {renderMiniPhotos()}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="m-0 w-full px-4 sm:mb-12 lg:w-2/5">
                  <div className="mx-auto max-w-lg">
                    <span className="mb-4 inline-flex h-8 items-center justify-center rounded-md border-2 border-black bg-indigo-500 px-1 text-sm font-black uppercase text-white shadow-sm">
                      NEW
                    </span>
                    <h2 className="mb-1 text-4xl font-black">{name}</h2>
                    <span className="mb-4 block text-2xl font-black text-green-500">
                      ${price}
                    </span>
                    <p className="mb-6 font-medium">Darling Doll Cosmetics</p>
                    <div className="mb-6 flex flex-wrap"></div>
                    <a
                      className="bg-blueGray-900 group relative mb-4 inline-block h-12 w-full rounded-md"
                      href="#"
                    >
                      <div className="absolute left-0 top-0 h-full w-full -translate-x-1 -translate-y-1 transform transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
                        <div className="flex h-full w-full items-center justify-center rounded-md border-2 border-black bg-pink-600">
                          <button
                            onClick={handleAddToCart}
                            className="text-base font-black text-black transition duration-200 ease-in-out hover:text-indigo-500"
                          >
                            {isAddedToCart ? "ADDED TO CART" : "ADD TO CART"}
                          </button>
                        </div>
                      </div>
                    </a>
                    <a
                      className="mb-5 inline-flex w-full  justify-center text-black transition duration-200 hover:text-indigo-500"
                      href="#"
                    >
                      <svg
                        width={20}
                        height={18}
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.44 0.0999756C12.63 0.0999756 11.01 0.979976 10 2.32998C8.99 0.979976 7.37 0.0999756 5.56 0.0999756C2.49 0.0999756 0 2.59998 0 5.68998C0 6.87998 0.19 7.97998 0.52 8.99998C2.1 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 8.99998C19.81 7.97998 20 6.87998 20 5.68998C20 2.59998 17.51 0.0999756 14.44 0.0999756Z"
                          fill="currentColor"
                        />
                      </svg>
                      <button
                        className="mb-4 ml-2 text-sm font-black"
                        onClick={handleAddToFavorites}
                      >
                        {isAddedToFavorites
                          ? "ADDED TO FAVORITES"
                          : "ADD TO FAVORITES"}
                      </button>
                    </a>
                    <div className="rounded-md border-2 border-black">
                      <button
                        onClick={toggleDescription}
                        className="group flex w-full flex-wrap items-center justify-between border-b-2 border-black px-6 py-5 text-left"
                      >
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
                        <div
                          className={
                            isDescriptionOpen ? "mt-4 block" : "mt-4 hidden"
                          }
                        >
                          <p className="text-xs font-bold">{description}</p>
                        </div>
                      </button>
                      <button
                        onClick={toggleIngredients}
                        className="group flex w-full flex-wrap justify-between border-b-2 border-black px-6 py-5 text-left"
                      >
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
                        <div
                          className={
                            isIngredientsOpen ? "mt-4 block" : "mt-4 hidden"
                          }
                        >
                          <p className="text-xs font-bold">{ingredients}</p>
                        </div>
                      </button>
                      <button
                        onClick={toggleShipping}
                        className="group flex w-full flex-wrap items-center justify-between px-6 py-5 text-left"
                      >
                        <span className="text-sm font-black">
                          SHIPPING &amp; RETURNS
                        </span>
                        <svg
                          width={10}
                          height={6}
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.94674 0.453369H4.79341H1.05341C0.41341 0.453369 0.0934098 1.2267 0.546743 1.68004L4.00008 5.13337C4.55341 5.6867 5.45341 5.6867 6.00674 5.13337L7.32008 3.82004L9.46008 1.68004C9.90674 1.2267 9.58674 0.453369 8.94674 0.453369Z"
                            fill="black"
                          ></path>
                        </svg>
                        <div
                          className={
                            isShippingOpen ? "mt-4 block" : "mt-4 hidden"
                          }
                        >
                          <p className="text-xs font-bold">
                            Orders above $50 get FREE SHIPPING. Open to US
                            residents only. Shipping in the US is $5.95 under
                            $50. Due to sanitation, we do not offer returns.
                            Please contact info@darlingdollcosmetics.com for any
                            questions or concerns. We may offer refunds on a
                            case by case basis.
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
