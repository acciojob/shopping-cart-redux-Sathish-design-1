import React from "react";
import { useDispatch } from "react-redux";

const products = [
  { id: 1, name: "Blue Jacket", price: 50 },
  { id: 2, name: "Red Hoodie", price: 40 },
  { id: 3, name: "Black T-Shirt", price: 20 }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          <h4>{p.name} - ${p.price}</h4>
          <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: p })}>
            Add to Cart
          </button>
          <button onClick={() => dispatch({ type: "ADD_TO_WISHLIST", payload: p })}>
            Add to Wishlist
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
