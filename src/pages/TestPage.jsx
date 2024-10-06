import { useNavigate } from "react-router-dom";
import TestForm from "../components/TestForm";
import calculator from "../utils/calculator";
import { createTestResult } from "../api/testResults";
import { questions } from "../data/questions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const TestPage = () => {
  const navigate = useNavigate();

  const AuthData = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (resultData) => {
      return await createTestResult(resultData);
    },
    onSuccess: () => {
      navigate("/results");
      queryClient.invalidateQueries(["results"]);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleTestSubmit = async (answers) => {
    const result = calculator(answers, questions);
    const resultData = {
      userId: AuthData.user.id,
      nickname: AuthData.user.nickname,
      result,
      answers,
      date: new Date().toISOString(),
      visibility: true,
    };
    mutation.mutate(resultData);
  };
  return (
    <div className="py-10 flex justify-center flex-col w-1/2 m-auto">
      <h1 className="font-bold mb-3 text-2xl">MBTI 테스트</h1>
      <TestForm onSubmit={handleTestSubmit} />
    </div>
  );
};

export default TestPage;
