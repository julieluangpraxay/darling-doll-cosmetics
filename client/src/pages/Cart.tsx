import { useEffect, useState } from "react";
import { CartItem, fetchCart } from "../lib/api";

export default function Cart() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function loadCatalog() {
      try {
        const cartItems = await fetchCart();
        setCartItems(cartItems);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    loadCatalog();
  }, []);

  if (isLoading || !cartItems) return;
  if (error)
    return (
      <div>
        Error Loading Cart:{" "}
        {error instanceof Error ? error.message : "Unknown Error"}
      </div>
    );

  function handleAddQuantity() {
    setQuantity((prev) => prev + 1);
    console.log("quantity add:", quantity);
  }

  return (
    <>
      <div>
        <h1 className="font-heading text-coolGray-800 mb-10 mt-10 text-center text-3xl font-semibold">
          SHOPPING CART
        </h1>
        <div className="mx-10 mb-6 rounded-3xl bg-pink-50 p-6 shadow-md">
          {cartItems.map((n) => (
            <CartCard
              cartItems={n}
              key={n.productId}
              onClick={() => handleAddQuantity()}
            />
          ))}
          <div className="flex flex-wrap items-center justify-between gap-2 px-10  py-4 ">
            <p className="text-rhino-700 text-lg font-semibold">SUBTOTAL</p>
            <p className="text-rhino-800 text-lg font-semibold">$ 1000.00</p>
          </div>
          <div className="flex flex-wrap justify-end gap-4 p-8">
            <a
              className="rounded-xl bg-pink-500 px-4 py-3 text-center text-white transition duration-200 hover:bg-purple-600"
              href="#"
            >
              CHECKOUT
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

type CartProps = {
  cartItems: CartItem;
  onClick: () => void;
};

function CartCard({ cartItems, onClick }: CartProps) {
  const { name, price, imageUrl, quantity } = cartItems;

  return (
    <>
      <section className="bg-pink-50">
        <div className="container mx-auto rounded-3xl">
          <div className="overflow-x-auto">
            <div className="flex">
              <div className="w-full">
                <div className="flex items-center px-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center rounded-lg bg-gray-100 lg:w-24">
                      <img src={imageUrl} alt="" className="w-24" />
                    </div>
                    <div>
                      <h2 className="text-rhino-800">{name}</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-32 items-center justify-center">
                <p className="text-rhino-800">${price}</p>
              </div>
              <div className="w-72">
                <div className=" flex h-32 items-center justify-center px-6 py-4">
                  <div className="border-coolGray-200 flex items-center gap-4 rounded-sm border bg-white px-4 py-3">
                    <div className="text-coolGray-300 hover:text-coolGray-400 cursor-pointer transition duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={17}
                        viewBox="0 0 16 17"
                        fill="none"
                      >
                        <path
                          d="M12.6667 7.49988H3.33341C3.1566 7.49988 2.98703 7.57012 2.86201 7.69514C2.73699 7.82016 2.66675 7.98973 2.66675 8.16654C2.66675 8.34336 2.73699 8.51292 2.86201 8.63795C2.98703 8.76297 3.1566 8.83321 3.33341 8.83321H12.6667C12.8436 8.83321 13.0131 8.76297 13.1382 8.63795C13.2632 8.51292 13.3334 8.34336 13.3334 8.16654C13.3334 7.98973 13.2632 7.82016 13.1382 7.69514C13.0131 7.57012 12.8436 7.49988 12.6667 7.49988Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <span className="text-rhino-800 text-sm">{quantity}</span>
                    <div
                      className="text-coolGray-300 hover:text-coolGray-400 cursor-pointer transition duration-200"
                      onClick={onClick}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={17}
                        viewBox="0 0 16 17"
                        fill="none"
                      >
                        <path
                          d="M12.6667 7.4998H8.66675V3.4998C8.66675 3.32299 8.59651 3.15342 8.47149 3.02839C8.34646 2.90337 8.17689 2.83313 8.00008 2.83313C7.82327 2.83313 7.6537 2.90337 7.52868 3.02839C7.40365 3.15342 7.33341 3.32299 7.33341 3.4998V7.4998H3.33341C3.1566 7.4998 2.98703 7.57003 2.86201 7.69506C2.73699 7.82008 2.66675 7.98965 2.66675 8.16646C2.66675 8.34327 2.73699 8.51284 2.86201 8.63787C2.98703 8.76289 3.1566 8.83313 3.33341 8.83313H7.33341V12.8331C7.33341 13.0099 7.40365 13.1795 7.52868 13.3045C7.6537 13.4296 7.82327 13.4998 8.00008 13.4998C8.17689 13.4998 8.34646 13.4296 8.47149 13.3045C8.59651 13.1795 8.66675 13.0099 8.66675 12.8331V8.83313H12.6667C12.8436 8.83313 13.0131 8.76289 13.1382 8.63787C13.2632 8.51284 13.3334 8.34327 13.3334 8.16646C13.3334 7.98965 13.2632 7.82008 13.1382 7.69506C13.0131 7.57003 12.8436 7.4998 12.6667 7.4998Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-72">
                <div className=" flex h-32 items-center justify-end px-6 py-4">
                  <p className="text-rhino-800">${price}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
