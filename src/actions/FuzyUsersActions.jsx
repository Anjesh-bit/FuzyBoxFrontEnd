import {
  ON_USERFINDALL_START,
  ON_USERFINDALL_SUCCESS,
  ON_USERFINDALL_FAILED,
  ON_USERFINDBYID_START,
  ON_USERFINDBYID_SUCCESS,
} from "../constants/FuzyUsersConstant";
import axiosBaseUri from "../utils/AxiosBaseUri";
import axiosErrorHandler from "../utils/AxiosErrorHandler";

const users = axiosBaseUri("http://localhost:5000/");
const fuzyUserFindAll = () => async (dispatch) => {
  try {
    dispatch({ type: ON_USERFINDALL_START });
    const { data } = await users.get("users/fuzyUsersFindAll");
    const fuzyUsersAllData = data.fuzyUsersAllData;
    console.log(fuzyUsersAllData);
    dispatch({ type: ON_USERFINDALL_SUCCESS, payload: fuzyUsersAllData });
  } catch (error) {
    axiosErrorHandler(dispatch, error);
  }
};

const fuzyUserFindById = (id) => async (dispatch) => {
  try {
    dispatch({ type: ON_USERFINDBYID_START });
    const { data } = await users.get(`users/${id}`);
    const fuzySingleUserData = data.fuzySingleUserData;
    console.log(fuzySingleUserData);
    dispatch({ type: ON_USERFINDBYID_SUCCESS, payload: fuzySingleUserData });
  } catch (error) {
    axiosErrorHandler(dispatch, error);
  }
};

export { fuzyUserFindAll, fuzyUserFindById };
