import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">홈</Link>
          {/* <div>{user ? <></> : <Link to={"/login"}>로그인</Link>}</div> */}
          <Link to={"/login"}>로그인</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
