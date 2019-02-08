import { createStore, applyMiddleaware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from ".reducers";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const enhancer = compose(
  applyMiddleaware(ReduxThunk),
  devTools
);

const store = createStore(reducer, enhancer);

export default store;
