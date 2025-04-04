import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [addedProducts, setAddedProducts] = useState([]);

  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];

  const addToCart = (product) => {
    const isProduct = (p) => p.name === product.name;
    if (addedProducts.some(isProduct)) return;
    const ShallowCopyProduct = { ...product, quantity: 1 };
    setAddedProducts((curr) => [...curr, ShallowCopyProduct]);
  };

  return (
    <>
      <h1>Lista prodotti</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name}, {product.price}
            <button onClick={() => addToCart(product)}>
              "Aggiungi al carrello
            </button>
          </li>
        ))}
      </ul>
      <h1>Carrello della spesa</h1>
      <ul>
        {addedProducts.map((product, index) => (
          <li key={index}>
            {product.name}({product.price} €),{" "}
            {"quantity = " + product.quantity}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
