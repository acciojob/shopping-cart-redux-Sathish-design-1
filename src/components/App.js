import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

function App() {
  return (
    <div>
      <h1>Shopping Cart Redux</h1>

      <ProductList />
      <Wishlist />
      <Cart />
    </div>
  );
}

export default App;
