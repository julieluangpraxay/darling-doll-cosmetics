import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Catalog } from "./pages/Catalog";
import { useState, useEffect } from "react";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { Footer } from "./components/Footer";
import { Favorites } from "./pages/Favorites";
import CheckoutConfirmation from "./pages/CheckoutConfirmation";

export default function App() {
  const [serverData, setServerData] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function readServerData() {
      const resp = await fetch("/api/products");
      const data = await resp.json();
      console.log("Data from server:", data);
      setServerData(data.message);
    }
    readServerData();
  }, []);

  return (
    <>
      <div>
        <Header
          onSearch={(text) => setSearchText(text)}
          searchText={searchText}
        />
        <div className=" max-h-screen bg-gradient-to-b from-customPurple via-cyan-100 to-white">
          <div className="mx-auto">
            <Routes>
              <Route index element={<Home />} />
              <Route
                path="catalog"
                element={<Catalog searchText={searchText} />}
              />
              <Route path="details/:productId" element={<ProductDetails />} />
              <Route path="cart" element={<Cart />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="checkout" element={<CheckoutConfirmation />} />
            </Routes>
          </div>

          <div>{serverData}</div>
          <Footer />
        </div>
      </div>
    </>
  );
}
