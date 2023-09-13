import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "./utils/Authentication";

const UsersGuard = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/accounts/login" />;
};

export default UsersGuard;
