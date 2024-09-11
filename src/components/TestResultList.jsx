import TestResultItem from "./TestResultItem";

const TestResultList = ({ result, user }) => {
  return (
    <div className="flex flex-col gap-10 py-10">
      {result
        .filter((result) => result.visibility || result.userId === user.id)
        .map((result) => (
          <TestResultItem key={result.id} result={result} user={user} />
        ))}
    </div>
  );
};

export default TestResultList;
