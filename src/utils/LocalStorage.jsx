const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const setLocalStorage = (key, value) => {
  return localStorage.setItem(key, value);
};

const deleteLocalStorage = (key) => {
  return localStorage.removeItem(key);
};

export { getLocalStorage, setLocalStorage, deleteLocalStorage };
