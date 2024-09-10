import { Navigate } from "react-router-dom";

const ProtectedRout = ({ children, isLogin, user }) => {
  if (!isLogin || !user) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default ProtectedRout;
