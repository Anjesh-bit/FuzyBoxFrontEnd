import axiosBaseUri from "../utils/AxiosBaseUri.jsx";
import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
} from "../constants/FuzyRegisterConstant.jsx";
import axiosErrorHandler from "../utils/AxiosErrorHandler.jsx";

//baseUri
const register = axiosBaseUri("http://localhost:5000/");
const fuzyRegisterActions =
  (fname, lname, emailorNumber, password, dob) => async (dispatch) => {
    try {
      const fuzyUsersData = { fname, lname, emailorNumber, password, dob };

      dispatch({ type: REGISTER_USER_START });
      const { data } = await register.post(
        "users/fuzyUserRegistration",
        fuzyUsersData
      );

      const fuzyUsersDataResponse = data.fuzyUsersDataResponse;

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: fuzyUsersDataResponse,
      });
    } catch (error) {
      axiosErrorHandler(dispatch, error);
    }
  };
  
export { fuzyRegisterActions };
