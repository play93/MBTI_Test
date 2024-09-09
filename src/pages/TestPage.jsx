import { useNavigate } from "react-router-dom";
import TestForm from "../components/TestForm";
import Calculator from "../utils/Calculator";
import { createTestResult } from "../api/testResults";

const TestPage = ({ user }) => {
  const navigate = useNavigate();

  const handleTestSubmit = async (answers) => {
    const result = Calculator(answers);
    const resultData = {
      userId: user.id,
      nickname: user.nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    };
    await createTestResult(resultData);
    navigate("/results");
  };
  return (
    <div>
      <h1>MBTI 테스트</h1>
      <TestForm onSubmit={handleTestSubmit} />
    </div>
  );
};

export default TestPage;
