export default function wishlistReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      const exists = state.find(i => i.id === action.payload.id);
      if (exists) return state;
      return [...state, action.payload];

    case "REMOVE_FROM_WISHLIST":
      return state.filter(i => i.id !== action.payload);

    default:
      return state;
  }
}
