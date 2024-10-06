import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Login = () => {
  return (
    <section className="py-10 flex justify-center">
      <div>
        <h1 className="font-bold mb-3 text-2xl">로그인</h1>
        <AuthForm mode="login" />
        <div>
          <p className="mt-5">
            계정이 없으신가요?{" "}
            <Link to="/register" className="text-orange-700">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
