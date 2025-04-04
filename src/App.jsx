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
    const ShallowCopyProduct = { ...product, quantity: 1 };
    if (addedProducts.some(isProduct)) {
      const modifyArr = addedProducts.map((e) => {
        return e.name === product.name ? { ...e, quantity: e.quantity + 1 } : e;
      });
      setAddedProducts(modifyArr);
    } else {
      setAddedProducts((curr) => [...curr, ShallowCopyProduct]);
    }
  };

  const removeFromCart = (product) => {
    if (product.quantity > 1) {
      const decreaseQuantity = addedProducts.map((obj) => {
        return obj.name === product.name
          ? { ...obj, quantity: obj.quantity - 1 }
          : obj;
      });
      setAddedProducts(decreaseQuantity);
    } else {
      const modifyArr = addedProducts.filter((e) => {
        return e.name != product.name;
      });
      setAddedProducts(modifyArr);
    }
  };

  const calcola = () => {
    let valore = 0;
    addedProducts.forEach((e) => (valore += e.price * e.quantity));
    return valore.toFixed(2);
  };

  return (
    <>
      <h1>Lista prodotti</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name}, {product.price}
            <button onClick={() => addToCart(product)}>
              Aggiungi al carrello
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
            <button onClick={() => removeFromCart(product)}>
              Rimuovi dal carrello
            </button>
          </li>
        ))}
      </ul>
      <h2>Totale da pagare: {calcola()} €</h2>
    </>
  );
}
export default App;
