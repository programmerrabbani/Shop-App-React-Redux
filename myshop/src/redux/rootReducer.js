import { combineReducers } from "redux";
import shopReducer from "./shop/shopReducer.js";

// create root reducer

const rootReducer = combineReducers({
  shop: shopReducer,
});

// export

export default rootReducer;
