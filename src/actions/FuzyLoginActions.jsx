import axiosBaseUri from "../utils/AxiosBaseUri";
import {
  LOGIN_START,
  LOGIN_SUCCESS,
} from "../constants/FuzyLoginConstant";
import decodeToken from "../utils/JWTdecode.jsx";
import { authentication } from "../utils/Authentication.jsx";
import axiosErrorHandler from "../utils/AxiosErrorHandler";

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
    
    const token = JSON.stringify(data.fuzyUsersDataResponse.token);;
    authentication(token, fuzyUsersDataResponse);
  } catch (error) {
    axiosErrorHandler(dispatch, error);
  }
};

export { fuzyLoginActions };
