import { useEffect, useState } from "react";
import {
  CartItem,
  Favorite,
  addToCart,
  deleteFromFavorites,
  fetchFavorites,
} from "../lib/api";
import { Link } from "react-router-dom";

export function Favorites() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    async function loadCatalog() {
      try {
        const favorites = await fetchFavorites();
        setFavorites(favorites);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    loadCatalog();
  }, []);

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
        Error Loading Cart:{" "}
        {error instanceof Error ? error.message : "Unknown cart error"}
      </div>
    );

  return (
    <>
      <div className="justify-center p-8 text-xl font-bold">
        <h1>FAVORITES</h1>
      </div>
      <div className="flex text-center sm:w-1/2">
        <div className="columns-2 border border-black p-4 text-xs">
          {favorites.map((item) => (
            <ul>
              <li>
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
              </li>
            </ul>
          ))}
        </div>
      </div>
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
            <h2 className="text-rhino-800 text-left">{name}</h2>
            <p className="text-rhino-800 p-2 text-left">${price}</p>
          </div>
        </div>
      </Link>

      <div className="">
        <button
          onClick={handleAddToCart}
          className="border-1 -translate-x-1 -translate-y-1 transform items-center justify-center rounded-md border-black bg-pink-300 text-base font-black text-black transition duration-200 duration-300 hover:text-indigo-500 group-hover:translate-x-0 group-hover:translate-y-0"
        >
          ADD TO CART
        </button>
      </div>
      <button
        className="rounded bg-pink-300 p-1"
        onClick={() => onDelete({ favoritesId })}
      >
        Remove
      </button>
    </>
  );
}
