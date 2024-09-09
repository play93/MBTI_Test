import { Navigate } from "react-router-dom";

const ProtectedRout = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default ProtectedRout;
