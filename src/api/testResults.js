import BaseURL from "../components/apiClient";

// 새로운 테스트 결과 저장
export const createTestResult = async (resultData) => {
  try {
    const response = await BaseURL.post(`/testResults`, resultData);
    return response.data;
  } catch (error) {
    console.error("에러발생 =>", error);
  }
};

// 테스트 결과를 가져옴
export const getTestResults = async () => {
  const response = await BaseURL.get(`/testResults`);
  return response.data;
};

// 테스트 결과를 삭제
export const deleteTestResult = async (id) => {
  const response = await BaseURL.delete(`/testResults/${id}`);
  return response.data;
};

// 테스트 공개할건지 말건지
export const updateTestResultVisibility = async (id, visibility) => {
  const response = await BaseURL.patch(`/testResults/${id}`, { visibility });
  return response.data;
};

// 업데이트된 테스트결과를  가져옴
export const updateTestResults = async () => {
  const response = await BaseURL.get("/testResults");
  return response.data;
};
