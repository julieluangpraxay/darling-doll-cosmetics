import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Catalog } from "./pages/Catalog";
import { useState, useEffect } from "react";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { Footer } from "./components/Footer";

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
        <div className="min-h-screen bg-gradient-to-b from-purple-200 via-violet-300 via-white to-white">
          <div className="container mx-auto">
            <Routes>
              <Route index element={<Home />} />
              <Route
                path="catalog"
                element={<Catalog searchText={searchText} />}
              />
              <Route path="details/:productId" element={<ProductDetails />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </div>
          <Footer />
          <div>{serverData}</div>
        </div>
      </div>
    </>
  );
}
