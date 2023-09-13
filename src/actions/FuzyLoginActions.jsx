import axiosBaseUri from "../utils/AxiosBaseUri";
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_USERS,
} from "../constants/FuzyLoginConstant";
import decodeToken from "../utils/JWTdecode.jsx";
import { authentication } from "../utils/Authentication.jsx";
import axiosErrorHandler from "../utils/AxiosErrorHandler";
import { deleteLocalStorage } from "../utils/LocalStorage";
import { deleteCookies } from "../utils/Cookies";

//baseUri
const login = axiosBaseUri("http://localhost:5000/");
const fuzyLoginActions = (emailorNumber, password) => async (dispatch) => {
  try {
    const fuzyUsersData = { emailorNumber, password };
    dispatch({ type: LOGIN_START });

    const { data } = await login.post("users/fuzyLogin", fuzyUsersData);
    const fuzyUsersDataResponse = data.fuzyUsersDataResponse;

    dispatch({ type: LOGIN_SUCCESS, payload: fuzyUsersDataResponse });
    decodeToken(data.fuzyUsersDataResponse.token);

    const token = JSON.stringify(data.fuzyUsersDataResponse.token);
    authentication(token, fuzyUsersDataResponse);
  } catch (error) {
    axiosErrorHandler(dispatch, error);
  }
};

const fuzylogoutActions = () => (dispatch) => {
  deleteLocalStorage("fuzyUsers");
  deleteCookies("token");
  dispatch({ type: LOGOUT_USERS });
};

export { fuzyLoginActions, fuzylogoutActions };
