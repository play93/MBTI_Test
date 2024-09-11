import { useQueryClient } from "@tanstack/react-query";
import {
  deleteTestResult,
  updateTestResultVisibility,
} from "../api/testResults";

// mbti테스트 결과
const mbtiDescriptions = {
  ISTJ: "책임감 있고 신뢰할 수 있으며, 전통적이고 실용적인 사고방식을 가지고 있습니다.",
  ISFJ: "헌신적이고 따뜻하며, 사람들의 필요를 잘 이해하고 도와줍니다.",
  INFJ: "이상적이며 통찰력이 뛰어나고, 사람들과의 깊은 관계를 중요시합니다.",
  INTJ: "독립적이고 전략적이며, 높은 목표를 설정하고 달성하는 데 집중합니다.",
  ISTP: "문제 해결 능력이 뛰어나고, 상황에 맞게 유연하게 대처합니다.",
  ISFP: "예술적 감각이 뛰어나며, 감정 표현을 중요시합니다.",
  INFP: "이상적이고 창의적이며, 내면의 가치를 중요시합니다.",
  INTP: "논리적이고 분석적이며, 지적 호기심이 강합니다.",
  ESTP: "활동적이고 실용적이며, 순간의 기회를 포착하는 능력이 뛰어납니다.",
  ESFP: "사교적이고 쾌활하며, 현재의 순간을 즐깁니다.",
  ENFP: "열정적이고 창의적이며, 새로운 가능성을 탐구합니다.",
  ENTP: "논쟁을 즐기며, 창의적인 문제 해결 능력을 가지고 있습니다.",
  ESTJ: "체계적이고 효율적이며, 목표 달성에 집중합니다.",
  ESFJ: "사교적이고 따뜻하며, 다른 사람들의 감정을 잘 이해합니다.",
  ENFJ: "카리스마 있고 공감 능력이 뛰어나며, 사람들을 이끄는 데 탁월합니다.",
  ENTJ: "결단력 있고 목표 지향적이며, 리더십을 발휘합니다.",
};

const TestResultItem = ({ result, user }) => {
  const queryClient = useQueryClient();

  // 로그인한 사용자의 결과인지 확인
  const isOwner = result.userId === user.id;

  // 한국식으로 날짜 포멧변경
  const formattedDate = new Date(result.date).toLocaleString("ko-KR");

  // mbti 결과 설명 가져오기
  const description =
    mbtiDescriptions[result.result] || "MBTI 유형 설명을 찾을 수 없습니다.";

  // 공개 할지 말지
  const handleToggleVisibility = async () => {
    try {
      const newVisibility = !result.visibility; // 현재 공개여부의 반대값 을 선언해 서버에 업데이트 요청
      await updateTestResultVisibility(result.id, newVisibility);
      queryClient.invalidateQueries(["testResults", user.nickname]); // 이전의 내용(상태)을 썩은상태로 만들고 리패치해줌
    } catch (error) {
      console.error("테스트 결과의 공개/비공개 전환에 실패했습니다 : ", error);
      alert(
        "테스트 결과의 공개/비공개 전환에 실패했습니다. 다시 시도해 주세요."
      );
    }
  };
  console.log(result);

  // 테스트 결과 삭제
  const handleDelete = async () => {
    try {
      if (window.confirm("정말 삭제하시겠습니까?")) {
        await deleteTestResult(result.userId, result.id);
        queryClient.invalidateQueries(["testResults", user.nickname]); // 이전의 내용(상태)을 썩은상태로 만들고 리패치해줌
      }
    } catch (error) {
      console.error("Delete failed : ", error);
      alert("Delete failed. Please try again");
    }
  };

  return (
    <div className="flex flex-col gap-3 p-5 border rounded-lg ">
      <div className="flex flex-row justify-between gap-2">
        <h3 className="font-bold">{result.nickname}</h3>
        <p>{formattedDate}</p>
      </div>
      <p>{result.result}</p>
      <p>{description}</p>
      {isOwner && (
        <div className="flex flex-row justify-end gap-2">
          <button
            onClick={handleToggleVisibility}
            className="shadow-md p-2 bg-black text-white rounded-xl"
          >
            {result.visibility ? "비공개로 전환" : "공개로 전환"}
          </button>
          <button
            onClick={handleDelete}
            className=" shadow-md p-2 bg-black text-white rounded-xl"
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;
