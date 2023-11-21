import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Catalog } from "./pages/Catalog";
import { useState, useEffect } from "react";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";

export default function App() {
  const [serverData, setServerData] = useState("");

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
          <Route path="/" element={<Header />}>
            <Route index element={<Home />}></Route>
            <Route path="catalog" element={<Catalog />}></Route>
            {/* <Route path="sale" element={<Sale />}></Route> */}
            <Route
              path="details/:productId"
              element={<ProductDetails />}
            ></Route>
          </Route>
        </Routes>
      </div>
      <div>{serverData}</div>
    </>
  );
}
