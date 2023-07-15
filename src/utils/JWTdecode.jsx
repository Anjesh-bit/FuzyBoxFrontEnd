const decodeToken = (token) => {
  const tokenParts = token.split(".");
  //Base64-encoded ASCII string to a binary string.
  const payload =
    typeof atob === "function"
      ? atob(tokenParts[1])
      : Buffer.from(tokenParts[1], "base64").toString();
  // Parse the payload as JSON
  const data = JSON.parse(payload);
  // Return the data object
  return data;
};

export default decodeToken;
