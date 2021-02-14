import { createStore, combineReducers } from "redux";
import defaultReducer from "./defaultReducer";
export default function configureStore() {
  const store = createStore(
    combineReducers({
      defaultState: defaultReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
