import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = () => {
  const AuthData = useContext(AuthContext);

  console.log("ProtectedRoute user:", AuthData.user);
  if (!AuthData.isLogin || !AuthData.user) {
    alert("로그인이 필요한 페이지 입니다");
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
