import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "../constants/FuzyLoginConstant";
import {
  FUZY_404_NOT_FOUND,
  FUZY_BAD_REQUEST,
  FUZY_INTERNAL_SERVER_ERROR,
  FUZY_NETWORK_ERROR,
  FUZY_OTHER_ERROR,
  FUZY_UNAUTHORIZED_ERROR,
  FUZY_UNKNOWN_ERROR,
} from "../constants/StatusCodeError";
const fuzyLoginReducer = (state = { fuzyLoginData: {} }, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, loading: false };
    case LOGIN_SUCCESS:
      return { ...state, fuzyLoginData: action.payload, loading: true };
    case FUZY_404_NOT_FOUND:
      return { ...state, fuzyError: action.payload, loading: false };
    case FUZY_BAD_REQUEST:
      return { ...state, fuzyError: action.payload, loading: false };
    case FUZY_INTERNAL_SERVER_ERROR:
      return { ...state, fuzyError: action.payload, loading: false };
    case FUZY_NETWORK_ERROR:
      return { ...state, fuzyError: action.payload, loading: false };
    case FUZY_OTHER_ERROR:
      return { ...state, fuzyError: action.payload, loading: false };
    case FUZY_UNAUTHORIZED_ERROR:
      return { ...state, fuzyError: action.payload, loading: false };
    case FUZY_UNKNOWN_ERROR:
      return { ...state, fuzyError: action.payload, loading: false };
    default:
      return { ...state };
  }
};
export { fuzyLoginReducer };
