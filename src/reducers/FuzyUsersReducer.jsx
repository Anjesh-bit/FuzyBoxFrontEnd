import {
  ON_USERFINDALL_START,
  ON_USERFINDALL_SUCCESS,
  ON_USERFINDBYID_START,
  ON_USERFINDBYID_SUCCESS,
} from "../constants/FuzyUsersConstant";
import {
  FUZY_404_NOT_FOUND,
  FUZY_BAD_REQUEST,
  FUZY_INTERNAL_SERVER_ERROR,
  FUZY_NETWORK_ERROR,
  FUZY_OTHER_ERROR,
  FUZY_UNAUTHORIZED_ERROR,
  FUZY_UNKNOWN_ERROR,
} from "../constants/StatusCodeError";

const fuzyUserFindAllReducer = (state = { fuzyRegisterData: {} }, action) => {
  switch (action.type) {
    case ON_USERFINDALL_START:
      return { ...state, loading: false };
    case ON_USERFINDALL_SUCCESS:
      return { ...state, fuzyUsersAllData: action.payload, loading: true };
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

const fuzyUserFindSingleReducer = (
  state = { fuzyRegisterData: {} },
  action
) => {
  switch (action.type) {
    case ON_USERFINDBYID_START:
      return { ...state, loading: false };
    case ON_USERFINDBYID_SUCCESS:
      return { ...state, fuzyUsersSingleData: action.payload, loading: true };
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

export { fuzyUserFindAllReducer, fuzyUserFindSingleReducer };
