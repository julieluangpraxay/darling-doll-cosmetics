import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Catalog } from "./pages/Catalog";
import { useState, useEffect } from "react";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import Cart from "./pages/Cart";

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
        <Routes>
          <Route
            path="/"
            element={
              <Header
                onSearch={(text) => setSearchText(text)}
                searchText={searchText}
              />
            }
          >
            <Route index element={<Home />}></Route>
            <Route
              path="catalog"
              element={<Catalog searchText={searchText} />}
            ></Route>
            <Route
              path="details/:productId"
              element={<ProductDetails />}
            ></Route>
            <Route path="cart" element={<Cart />}></Route>
          </Route>
        </Routes>
      </div>
      <div>{serverData}</div>
    </>
  );
}
