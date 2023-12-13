import { useContext, useEffect, useState } from "react";
import {
  CartItem,
  Favorite,
  addToCart,
  deleteFromFavorites,
  fetchFavorites,
} from "../lib/api";
import { Link } from "react-router-dom";

type CartContextType = {
  cartQuantity: number;
  setCartQuantity: React.Dispatch<React.SetStateAction<number>>;
};

export function Favorites({ CartContext }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const { cartQuantity, setCartQuantity } =
    useContext<CartContextType>(CartContext);

  useEffect(() => {
    async function loadCatalog() {
      try {
        const favorites = await fetchFavorites();
        setFavorites(favorites);
        setCartQuantity(cartQuantity);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    loadCatalog();
  }, [cartQuantity, setCartQuantity]);

  async function handleRemoveFromFavorites({ favoritesId }) {
    if (!favoritesId) return;
    try {
      await deleteFromFavorites(favoritesId);
      try {
        const favorites = await fetchFavorites();
        setFavorites(favorites);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err);
    }
  }

  if (isLoading || !favorites) return;
  if (error)
    return (
      <div>
        Error Loading Favorites:{" "}
        {error instanceof Error ? error.message : "Unknown favorites error"}
      </div>
    );

  return (
    <>
      <div className="p-8 text-center text-xl font-bold">
        <h1>FAVORITES</h1>
      </div>
      {favorites.length === 0 ? (
        <div className="text-center">
          <p className="text-base">
            There are currently no favorited items. Click "add to favorites" to
            add to this list!
          </p>
        </div>
      ) : (
        <div className="m-0 flex flex-wrap justify-center p-4">
          {favorites.map((item) => (
            <div
              key={item.productId}
              className="mb-8 w-full px-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
            >
              <CartCard
                favorites={item}
                key={item.productId}
                cartItems={{
                  productId: 0,
                  name: "",
                  imageUrl: "",
                  price: 0,
                  quantity: 0,
                  cartId: 0,
                }}
                onDelete={handleRemoveFromFavorites}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

type CartProps = {
  cartItems: CartItem;
  favorites: Favorite;
  onDelete: ({ favoritesId }: { favoritesId: any }) => Promise<void>;
};

export function CartCard({ favorites, onDelete }: CartProps) {
  const { name, price, imageUrl, productId, favoritesId } = favorites;

  async function handleAddToCart() {
    if (!productId) return;
    try {
      await addToCart(+productId);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Link to={`/details/${productId}`}>
        <div className="">
          <div className="">
            <img
              src={imageUrl}
              alt=""
              className="w-full rounded
            "
            />
            <h2 className="text-sm">{name}</h2>
            <p className="p-2  text-sm">${price}</p>
          </div>
        </div>
      </Link>

      <div className="flex justify-between">
        <Link to="/cart">
          <button
            onClick={handleAddToCart}
            className="border-1 -translate-x-1 -translate-y-1 transform items-center justify-center rounded-md border-black bg-pink-300 p-2 text-base font-black text-black transition duration-200 duration-300 hover:text-indigo-500 group-hover:translate-x-0 group-hover:translate-y-0"
          >
            ADD TO CART
          </button>
        </Link>
        <button
          className="border-1 -translate-x-1 -translate-y-1 transform items-center justify-center rounded-md border-black bg-pink-300 p-2 text-base font-black text-black transition duration-200 duration-300 hover:text-indigo-500 group-hover:translate-x-0 group-hover:translate-y-0"
          onClick={() => onDelete({ favoritesId })}
        >
          Remove
        </button>
      </div>
    </>
  );
}
