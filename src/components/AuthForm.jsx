import { useState } from "react";
import AuthURL from "./AuthURL";

const AuthForm = ({ mode, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === "login") {
      // 로그인 할 경우
      const response = await AuthURL.post("/login", {
        id: formData.id,
        password: formData.password,
      });
      console.log("response.data", response.data);
    } else if (mode === "signup") {
      // 회원가입 할 경우
      const response = await AuthURL.post("/register", {
        id: formData.id,
        password: formData.password,
        nickname: formData.nickname,
      });
      console.log("response.data", response.data);
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 flex-col">
      <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="아이디"
        required
        className="w-full shadow-md p-2 rounded-xl"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호"
        required
        className="w-full shadow-md p-2 rounded-xl"
      />
      {mode === "signup" && ( // 회원가입이라면 닉네임 인풋도 보이게
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="닉네임"
          required
          className="w-full shadow-md p-2 rounded-xl"
        />
      )}
      <button
        type="submit"
        className="w-full shadow-md p-2 bg-black text-white rounded-xl"
      >
        {mode === "login" ? "로그인" : "회원가입"}
      </button>
    </form>
  );
};

export default AuthForm;
