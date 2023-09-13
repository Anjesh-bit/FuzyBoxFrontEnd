import Cookies from "js-cookie";

const getCookies = (key) => {
  return Cookies.get(key);
};

//Cookie expires in 1 day:
const setCookies = (key, value) => {
  return Cookies.set(key, value, { expires: 1 });
};

const deleteCookies = (key) => {
  return Cookies.remove(key);
};

export { getCookies, setCookies, deleteCookies };
