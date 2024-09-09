import axios from "axios";

const API_URL = "http://localhost:5000/testResults";

// 테스트 결과를 가져옴
export const getTestResults = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// 새로운 테스트 결과 저장
export const createTestResult = async (resultData) => {
  const response = await axios.post(API_URL, resultData);
  return response.data;
};

// 테스트 결과를 삭제
export const deleteTestResult = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

// 테스트 공개할건지 말건지
export const updateTestResultVisibility = async (id, visibility) => {
  const response = await axios.put(`${API_URL}/${id}`, visibility);
  return response.data;
};
