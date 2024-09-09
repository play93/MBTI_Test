import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

// 회원가입
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// 로그인
// 아이디와 비밀번호를 받아 /login 엔드포인트로 post 요청
export const login = async (userData) => {
  const response = await axios.post("/login", {
    id: userData.id,
    password: userData.password,
  });
  console.log("response.data", response.data);
  return response.data;
};

// 프로필 가져오기
export const getUserProfile = async (token) => {
  const response = await axios.get("/profile", token);
  return response.data;
};

// 프로필 업데이트 하기
export const updateProfile = async (formData) => {
  const response = await axios.put("/profile", formData);
  return response.data;
};
