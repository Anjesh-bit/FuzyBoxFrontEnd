const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};
const setLocalStorage = (key, value) => {
  return localStorage.setItem(key, value);
};
export { getLocalStorage, setLocalStorage };
