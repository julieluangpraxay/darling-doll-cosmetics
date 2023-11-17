// import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import "./App.css";
import { Catalog } from "./pages/Catalog";

export default function App() {
  // const [serverData, setServerData] = useState("");

  // useEffect(() => {
  //   async function readServerData() {
  //     const resp = await fetch("/api/product");
  //     const data = await resp.json();
  //     console.log("Data from server:", data);
  //     setServerData(data.message);
  //   }
  //   readServerData();
  // }, []);

  return (
    <>
      <div className="bg-pink-200">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Catalog />}></Route>
          </Route>
        </Routes>
      </div>

      {/* <h1>{serverData}</h1> */}
      <img src="./public/images/heroimg.png"></img>
      <h1></h1>
    </>
  );
}
