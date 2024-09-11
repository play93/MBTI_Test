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

const Router = () => {
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout isLogin={isLogin} setIsLogin={setIsLogin} />}
        >
          <Route path="/" element={<Home isLogin={isLogin} />} />
          <Route
            path="/login"
            element={<Login setUser={setUser} setIsLogin={setIsLogin} />}
          />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user} isLogin={isLogin}>
                <ProfilePage user={user} setUser={setUser} isLogin={isLogin} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/test"
            element={
              <ProtectedRoute user={user} isLogin={isLogin}>
                <TestPage user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/results"
            element={
              <ProtectedRoute user={user} isLogin={isLogin}>
                <TestResultPage user={user} />
              </ProtectedRoute>
            }
            user={user}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
