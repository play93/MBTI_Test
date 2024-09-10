import { useQuery } from "@tanstack/react-query";
import TestResultList from "../components/TestResultList";
import { getTestResults } from "../api/testResults";

const TestResultPage = ({ user }) => {
  console.log(user.id);
  const {
    data: results = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ["testResults", user.id],
    queryFn: () => getTestResults(user.id),
  });

  if (isPending) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error ... </p>;
  }

  return (
    <div>
      <h1>테스트결과 페이지</h1>
      <TestResultList result={results} user={user} />
    </div>
  );
};

export default TestResultPage;
