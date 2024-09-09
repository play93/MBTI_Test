import { useNavigate } from "react-router-dom";
import TestForm from "../components/TestForm";
import Calculator from "../utils/Calculator";
import { createTestResult } from "../api/testResults";
import { questions } from "../data/questions";

const TestPage = ({ user }) => {
  const navigate = useNavigate();

  const handleTestSubmit = async (answers) => {
    const result = Calculator(answers, questions);
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
    <div className="py-10 flex justify-center flex-col w-1/2 m-auto">
      <h1 className="font-bold mb-3 text-2xl">MBTI 테스트</h1>
      <TestForm onSubmit={handleTestSubmit} />
    </div>
  );
};

export default TestPage;
