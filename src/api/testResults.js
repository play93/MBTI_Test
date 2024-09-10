import BaseURL from "../components/BaseURL";

// 새로운 테스트 결과 저장
export const createTestResult = async (resultData) => {
  try {
    // 새로운 테스트를 저장하기 전에
    // 기존 db에 있는 값을 가져와서
    const { nickname, ...result } = resultData; // 닉네임으로 사용자 조회
    const userResponse = await BaseURL.get("/users"); // 응답을 저장
    const users = userResponse.data; // userResponse.data에서 얻은 사용자 데이터
    const user = users.find((user) => user.nickname === nickname); // db에 있는 사용자 데이터

    // 동일한 아이디가 있는지 없는지 확인하고
    if (user) {
      const updateResults = [...user.results, result];
      await BaseURL.patch(`/users/${user.id}`, { results: updateResults });
    } else {
      // 없으면 db.json에 새로운 users를 만들어서 그 안에 결과값을 넣어주기
      await BaseURL.post("/users", {
        nickname: resultData.nickname,
        results: [result],
      });
    }
  } catch (error) {
    console.error("에러발생 =>", error);
  }
};

// 테스트 결과를 가져옴
export const getTestResults = async (userId) => {
  const response = await BaseURL.get(`/users/${userId}`);
  return response.data.results;
};

// 테스트 결과를 삭제
export const deleteTestResult = async (userId, id) => {
  const response = await BaseURL.delete(`/users/${userId}/results/${id}`);
  return response.data;
};

// 테스트 공개할건지 말건지
export const updateTestResultVisibility = async (userId, id, visibility) => {
  const response = await BaseURL.patch(
    `/users/${userId}/results/${id}`,
    visibility
  );
  return response.data;
};
