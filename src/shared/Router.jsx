import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import ProtectedRoute from "../components/ProtectedRoute";
import Layout from "./Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import ProfilePage from "../pages/ProfilePage";

const Router = () => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser, isLogin, setIsLogin }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* 비로그인 페이지 */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* 로그인페이지 */}
            <Route element={<ProtectedRoute user={user} />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/test" element={<TestPage />} />
              <Route path="/results" element={<TestResultPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default Router;
