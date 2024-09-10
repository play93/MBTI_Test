import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const Register = () => {
  return (
    <section className="py-10 flex justify-center">
      <div>
        <h1 className="font-bold mb-3 text-2xl">회원가입</h1>
        <AuthForm mode="signup" />
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
