import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];
  return (
    <>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name + ", " + product.price}</li>
        ))}
      </ul>
    </>
  );
}
export default App;
