export default function discountReducer(state = 0, action) {
  switch (action.type) {
    case "APPLY_DISCOUNT":
      return action.payload; // % discount
    default:
      return state;
  }
}
