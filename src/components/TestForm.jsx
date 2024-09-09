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
        <div key={q.id}>
          <p>{q.question}</p>
          {q.options.map((option, i) => (
            <label key={i}>
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={answers[index] === option}
                onChange={() => handleChange(index, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button type="submit">제출하기</button>
    </form>
  );
};

export default TestForm;
