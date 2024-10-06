import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRout = ({ children }) => {
  const AuthData = useContext(AuthContext);

  console.log("ProtectedRoute user:", AuthData.user);
  if (!AuthData.isLogin || !AuthData.user) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default ProtectedRout;
