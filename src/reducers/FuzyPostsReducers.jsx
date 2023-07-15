import {
  ON_POST_CREATE_START,
  ON_POST_CREATE_SUCCESS,
  ON_POST_FINDALLPOST_START,
  ON_POST_FINDALLPOST_SUCCESS,
} from "../constants/FuzyPostsConstant";
import {
  FUZY_404_NOT_FOUND,
  FUZY_BAD_REQUEST,
  FUZY_INTERNAL_SERVER_ERROR,
  FUZY_NETWORK_ERROR,
  FUZY_OTHER_ERROR,
  FUZY_UNAUTHORIZED_ERROR,
  FUZY_UNKNOWN_ERROR,
} from "../constants/StatusCodeError";
const fuzyPostsReducer = (state = { fuzyPostData: "" }, action) => {
  switch (action.type) {
    case ON_POST_CREATE_START:
      return { ...state, loading: false };
    case ON_POST_CREATE_SUCCESS:
      return { ...state, fuzyPostData: action.payload, loading: true };
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
const fuzyPostFindPostsOfOneUserReducer = (
  state = [{ fuzyPostsOfOneUserData: "" }],
  action
) => {
  switch (action.type) {
    case ON_POST_FINDALLPOST_START:
      return { ...state, loading: false };
    case ON_POST_FINDALLPOST_SUCCESS:
      return {
        ...state,
        loading: true,
        fuzyPostsOfOneUserData: action.payload,
      };
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

export { fuzyPostsReducer, fuzyPostFindPostsOfOneUserReducer };
