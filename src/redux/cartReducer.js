const initialState = [];

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemExists = state.find(i => i.id === action.payload.id);
      if (itemExists) {
        return state.map(i =>
          i.id === action.payload.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];

    case "REMOVE_FROM_CART":
      return state.filter(i => i.id !== action.payload);

    case "INCREASE_QTY":
      return state.map(i =>
        i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
      );

    case "DECREASE_QTY":
      return state.map(i =>
        i.id === action.payload && i.quantity > 1
          ? { ...i, quantity: i.quantity - 1 }
          : i
      );

    default:
      return state;
  }
}
