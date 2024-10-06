import { useQuery } from "@tanstack/react-query";
import TestResultList from "../components/TestResultList";
import { getTestResults } from "../api/testResults";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const TestResultPage = () => {
  const AuthData = useContext(AuthContext);

  console.log("user =>", AuthData.user);
  const {
    data: results = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["testResults", AuthData.user.nickname],
    queryFn: () => getTestResults(AuthData.user.nickname),
  });

  if (isPending) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error ... </p>;
  }

  return (
    <div className="py-10 flex justify-center flex-col w-3/5 m-auto ">
      <h1 className="font-bold mb-3 text-2xl">테스트결과 페이지</h1>
      <TestResultList result={results} user={AuthData.user} />
    </div>
  );
};

export default TestResultPage;
