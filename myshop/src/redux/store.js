import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";

// middleware

const middlewares = [thunk];

// create app store

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

// export

export default store;
