import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Wishlist() {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Wishlist</h2>

      {wishlist.length === 0 && <p>No items in wishlist</p>}

      {wishlist.map(item => (
        <div key={item.id}>
          <h4>{item.name} - ${item.price}</h4>

          {/* Move to Cart */}
          <button
            onClick={() => {
              dispatch({ type: "ADD_TO_CART", payload: item });
              dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item.id });
            }}
          >
            Move to Cart
          </button>

          {/* Remove from Wishlist */}
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item.id })
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;
