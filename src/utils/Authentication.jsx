import { getLocalStorage, setLocalStorage } from "./LocalStorage";
import { getCookies, setCookies } from "./Cookies";
//set the data into Cookies and LocalStorage:
const authentication = (token, users) => {
  setLocalStorage("fuzyUsers", JSON.stringify(users));
  setCookies("token", JSON.stringify(token));
};
const isAuthenticated = () => {
  //if the data is in localStorage and Cookies then return usersData:
  const isAuth =
    getLocalStorage("fuzyUsers") && getCookies("token")
      ? JSON.parse(getLocalStorage("fuzyUsers"))
      : false;
  return isAuth;
};
export { authentication, isAuthenticated };
