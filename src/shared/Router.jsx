import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import { useState } from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import ProfilePage from "../pages/ProfilePage";
import { AuthContext } from "../context/AuthContext";

const Router = () => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser, isLogin, setIsLogin }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/test"
              element={
                <ProtectedRoute>
                  <TestPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/results"
              element={
                <ProtectedRoute>
                  <TestResultPage />
                </ProtectedRoute>
              }
              user={user}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default Router;
