import {
  ON_MODAL_OPEN,
  ON_MODAL_CLOSE,
  ON_MODAL_FAIL,
} from "../constants/FuzyModalConstant";

const fuzyModalReducers = (state = {}, action) => {
  switch (action.type) {
    case ON_MODAL_OPEN:
      return { ...state, open: action.payload };
    case ON_MODAL_CLOSE:
      return { ...state, open: action.payload };
    case ON_MODAL_FAIL:
      return { ...state, open: false, error: action.payload };
    default:
      return { ...state };
  }
};
export { fuzyModalReducers };
