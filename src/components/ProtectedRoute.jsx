import { Navigate } from "react-router-dom";

const ProtectedRout = ({ children, isLogin, user }) => {
  console.log("ProtectedRoute user:", user);
  if (!isLogin || !user) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default ProtectedRout;
