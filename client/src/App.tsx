import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Catalog } from "./pages/Catalog";
import {
  useState,
  useEffect,
  createContext,
  SetStateAction,
  Dispatch,
} from "react";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { Footer } from "./components/Footer";
import { Favorites } from "./pages/Favorites";
import CheckoutConfirmation from "./pages/CheckoutConfirmation";
import { fetchCart } from "./lib/api";

interface CartContextProps {
  cartQuantity: number;
  setCartQuantity: Dispatch<SetStateAction<number>>;
}

const initialCartContext: CartContextProps = {
  cartQuantity: 0,
  setCartQuantity: () => {},
};

const CartContext = createContext<CartContextProps | null>(initialCartContext);

export { CartContext };

export default function App() {
  const [serverData, setServerData] = useState("");
  const [searchText, setSearchText] = useState("");
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    async function readServerData() {
      const resp = await fetch("/api/products");
      const data = await resp.json();
      setServerData(data.message);
    }
    readServerData();
  }, []);

  useEffect(() => {
    // Fetch cart items and update cart quantity whenever there's a change in the cart
    async function fetchAndSetCartQuantity() {
      try {
        const cartItems = await fetchCart();
        const totalQuantity = cartItems.reduce(
          (total, product) => total + product.quantity,
          0,
        );
        setCartQuantity(totalQuantity);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    }
    fetchAndSetCartQuantity();
  }, []);

  return (
    <>
      <CartContext.Provider value={{ cartQuantity, setCartQuantity }}>
        <div>
          <Header
            onSearch={(text) => setSearchText(text)}
            searchText={searchText}
            cartQuantity={cartQuantity}
          />
          <div className=" max-h-screen bg-gradient-to-b from-customPurple via-cyan-100 to-white">
            <div className="mx-auto">
              <Routes>
                <Route index element={<Home />} />
                <Route
                  path="catalog"
                  element={<Catalog searchText={searchText} />}
                />
                <Route
                  path="details/:productId"
                  element={<ProductDetails CartContext={CartContext} />}
                />
                <Route
                  path="cart"
                  element={<Cart CartContext={CartContext} />}
                />
                <Route path="favorites" element={<Favorites />} />
                <Route path="checkout" element={<CheckoutConfirmation />} />
              </Routes>
            </div>

            <div>{serverData}</div>
            <Footer />
          </div>
        </div>
      </CartContext.Provider>
    </>
  );
}
