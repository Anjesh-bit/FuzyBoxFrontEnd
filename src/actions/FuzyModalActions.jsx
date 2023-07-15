import {
  ON_MODAL_OPEN,
  ON_MODAL_CLOSE,
  ON_MODAL_FAIL,
} from "../constants/FuzyModalConstant";

const fuzyModalOpenActions = (opened) => (dispatch) => {
  try {
    dispatch({ type: ON_MODAL_OPEN, payload: opened });
  } catch (error) {
    dispatch({
      type: ON_MODAL_FAIL,
    });
  }
};

const fuzyModalCloseActions = (opened) => (dispatch) => {
  try {
    dispatch({ type: ON_MODAL_CLOSE, payload: opened });
  } catch (error) {
    dispatch({
      type: ON_MODAL_FAIL,
    });
  }
};

export { fuzyModalOpenActions, fuzyModalCloseActions };
