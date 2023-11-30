import { useEffect, useState } from "react";
import { CartItem, Favorite, fetchFavorites } from "../lib/api";
import { Link } from "react-router-dom";

export function Favorites() {
  {
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

    if (isLoading || !favorites) return;
    if (error)
      return (
        <div>
          Error Loading Cart:{" "}
          {error instanceof Error
            ? error.message
            : "Unknconst cart = updatedCart.rows[0];own Error"}
        </div>
      );

    return (
      <>
        <div className="text-center">
          <h1>FAVORITES</h1>
          <div className="">
            {favorites.map((item) => (
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
              />
            ))}

            <div className="flex flex-wrap justify-end gap-4 p-8"></div>
          </div>
        </div>
      </>
    );
  }
}

type CartProps = {
  cartItems: CartItem;
  favorites: Favorite;
};

export function CartCard({ favorites }: CartProps) {
  const { name, price, imageUrl, productId } = favorites;

  return (
    <>
      <Link to={`/details/${productId}`}>
        <div className="">
          <div className="">
            <img src={imageUrl} alt="" className="w-1/4 rounded-3xl" />

            <h2 className="text-rhino-800">{name}</h2>
            <div>
              <p className="text-rhino-800">${price}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}