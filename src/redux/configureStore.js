import { createStore, combineReducers } from "redux";
import trackerReducer from "./trackerReducer";
import screenReducer from "./screenReducer";
export default function configureStore() {
  const store = createStore(
    combineReducers({
      trackerState: trackerReducer,
      screenState: screenReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
