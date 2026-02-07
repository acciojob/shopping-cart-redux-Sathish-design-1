import { createStore, combineReducers } from "redux";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import discountReducer from "./discountReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  discount: discountReducer
});

const store = createStore(rootReducer);

export default store;
