import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { fuzyLoginReducer } from "./reducers/FuzyLoginReducer";
import { fuzyRegisterReducer } from "./reducers/FuzyRegisterReducer";
import { fuzyModalReducers } from "./reducers/FuzyModalReducer";
import {
  fuzyPostsReducer,
  fuzyPostFindPostsOfOneUserReducer,
} from "./reducers/FuzyPostsReducers";
const reducers = combineReducers({
  fuzyRegisterData: fuzyRegisterReducer,
  fuzyLoginData: fuzyLoginReducer,
  fuzyModelData: fuzyModalReducers,
  fuzyPostsData: fuzyPostsReducer,
  fuzyPostsOfOneUserData: fuzyPostFindPostsOfOneUserReducer,
});
//initial value for the store:(by default initail value is null):
const fuzyLoginLocalStorage = () => {
  if (localStorage.getItem("fuzyUsers")) {
    return JSON.parse(localStorage.getItem("fuzyUsers"));
  } else {
    return null;
  }
};
const initialState = {
  fuzyRegisterData: { loading: false },
  //data persists when reload:
  fuzyLoginData: {
    loading: false,
    fuzyLoginData: fuzyLoginLocalStorage(),
  },
  fuzyModelData: { open: false },
  fuzyPostsData: { loading: false },
  fuzyPostsOfOneUserData: { loading: false, fuzyPostsOfOneUserData: [{}] },
};
//middleware thUnk allows action creators to return function instead of action objects:(Used for async task)
const middleware = [thunk];
const Store = () => {
  const checkForReactDevTools =
    typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined";
  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middleware),
      checkForReactDevTools
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (args) => args
    )
  );
};
export default Store;
