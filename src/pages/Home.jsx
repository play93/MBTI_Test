import { Link, useNavigate } from "react-router-dom";

const Home = ({ isLogin }) => {
  const navigate = useNavigate();
  const movePageHandler = (where) => {
    if (isLogin) {
      navigate(where);
    } else {
      alert("로그인이 필요한 페이지 입니다");
      navigate("/login");
    }
  };
  return (
    <div className="flex flex-col gap-10 py-10">
      <h1 className="text-center text-2xl font-bold">무료성격테스트</h1>
      <p className="text-center">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <section className="flex justify-between gap-10 py-5 px-5">
        <div className="shadow-md p-5 rounded-xl ">
          <h3 className="font-bold mb-3">성격 유형 검사</h3>
          <p>
            자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지
            알아보세요.
          </p>
        </div>
        <div className="shadow-md p-5 rounded-xl">
          <h3 className="font-bold mb-3">성격 유형 이해</h3>
          <p>
            다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다.
          </p>
        </div>
        <div className="shadow-md p-5 rounded-xl">
          <h3 className="font-bold mb-3">팀 평가</h3>
          <p>
            팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
            배워보세요.
          </p>
        </div>
      </section>
      <Link
        to="test"
        className="text-center bg-black text-white w-3/12 m-auto	py-5	rounded-xl"
        onClick={() => {
          movePageHandler("/test");
        }}
      >
        내 성격 알아보러 가기
      </Link>
    </div>
  );
};

export default Home;
