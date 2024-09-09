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
    <section>
      <div>
        <h1>로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div>
          <p>
            계정이 없으신가요? <Link to="/register">회원가입</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
