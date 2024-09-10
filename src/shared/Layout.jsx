import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 로그아웃 시
    setIsLogin(false); // 상태를 null로 변경하고
    localStorage.removeItem("token");
    navigate("/login"); // 로그인페이지로 이동
  };

  return (
    <div>
      <header>
        <nav className="flex justify-between py-5 px-10 l m-auto shadow-md">
          <Link to="/">홈</Link>
          <div className="flex flex-row gap-3">
            {isLogin ? ( // 로그인 한 유저에게 보이는 버튼
              <>
                <Link to={"/profile"}>프로필</Link>
                <Link to={"/test"}>테스트</Link>
                <Link to={"/results"}>결과보기</Link>
                <button onClick={handleLogout}>로그아웃</button>
              </>
            ) : (
              // 비로그인 유저에게 보이는 버튼
              <Link to={"/login"}>로그인</Link>
            )}
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
