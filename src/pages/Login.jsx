import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import AuthURL from "../components/AuthURL";

const Login = ({ setUser }) => {
  const handleLogin = async (formData) => {
    try {
      const response = await AuthURL.post("/login", {
        id: formData.id,
        password: formData.password,
      });
      console.log("response.data", response.data);
      setUser(response.data);
    } catch (error) {
      console.error(error);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };
  return (
    <section className="py-10 flex justify-center">
      <div>
        <h1 className="font-bold mb-3 text-2xl">로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
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
