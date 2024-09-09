import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import AuthURL from "../components/AuthURL";

const Register = () => {
  const navigate = useNavigate();

  const handleSignUp = async (formData) => {
    try {
      const response = await AuthURL.post("/register", {
        id: formData.id,
        password: formData.password,
        nickname: formData.nickname,
      });
      console.log("response.data", response.data);
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };
  return (
    <section className="py-10 flex justify-center">
      <div>
        <h1 className="font-bold mb-3 text-2xl">회원가입</h1>
        <AuthForm mode="signup" onSubmit={handleSignUp} />
        <div>
          <p className="mt-5">
            이미 계정이 있으신가요? {""}
            <Link to="/login" className="text-orange-700">
              로그인
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
