import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Catalog } from "./pages/Catalog";
import { useState, useEffect } from "react";

export default function App() {
  const [serverData, setServerData] = useState("");

  useEffect(() => {
    async function readServerData() {
      const resp = await fetch("/api/product");
      const data = await resp.json();
      console.log("Data from server:", data);
      setServerData(data.message);
    }
    readServerData();
  }, []);

  return (
    <>
      <div className="bg-pink-200">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Catalog />}></Route>
          </Route>
        </Routes>
      </div>

      <h1>{serverData}</h1>
      <img src="/images/heroimg.png"></img>
    </>
  );
}
