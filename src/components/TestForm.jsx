import { useState } from "react";
import { questions } from "../data/questions";

const TestForm = ({ onSubmit }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  // 답변을 선택할 때
  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer; // 선택한 답변을 인덱스에 저장
    setAnswers(newAnswers); // 새로운 답변 상태를 업데이트
  };

  // 폼 제출 시
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 동작 (새로고침)방지
    onSubmit(answers); // 답변 전달
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((q, index) => (
        <div key={q.id} className="py-3 flex flex-col gap-2">
          <p>{q.question}</p>
          {q.options.map((option, i) => {
            // 선택된 답에 따라 테두리 색을 변경할 것
            const isSelected = answers[index] === option; // 선택됐는지 확인
            const borderStyleChange = isSelected
              ? "border-orange-700"
              : "border-gray-300"; // isSelected로 선택 여부를 확인해 테두리색을 변경
            return (
              <label
                key={i}
                className={`w-full p-2 border rounded-lg ${borderStyleChange}`}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={answers[index] === option}
                  onChange={() => handleChange(index, option)}
                  className="mr-2"
                />
                {option}
              </label>
            );
          })}
        </div>
      ))}
      <button
        type="submit"
        className="w-full shadow-md p-2 bg-black text-white rounded-xl"
      >
        제출하기
      </button>
    </form>
  );
};

export default TestForm;
