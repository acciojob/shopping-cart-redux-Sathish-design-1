import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const cart = useSelector(state => state.cart);
  const discount = useSelector(state => state.discount);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const finalTotal = total - (total * discount) / 100;

  return (
    <div>
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          {item.name} - ${item.price} x {item.quantity}
          <button onClick={() => dispatch({ type: "INCREASE_QTY", payload: item.id })}>+</button>
          <button onClick={() => dispatch({ type: "DECREASE_QTY", payload: item.id })}>-</button>
          <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ${total}</h3>
      <h3>Discount: {discount}%</h3>
      <h3>Final Total: ${finalTotal}</h3>

      <button onClick={() => dispatch({ type: "APPLY_DISCOUNT", payload: 10 })}>
        Apply 10% Coupon
      </button>
    </div>
  );
}

export default Cart;
