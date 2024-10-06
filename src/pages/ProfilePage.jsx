import { useContext, useState } from "react";
import AuthURL from "../components/AuthURL";
import { ACCESS_TOKEN_LOCALSTORAGE_KEY } from "../constants/index";
import { AuthContext } from "../context/AuthContext";

const ProfilePage = () => {
  const AuthData = useContext(AuthContext);

  const [nickname, setNickname] = useState(AuthData.user?.nickname || "");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem(ACCESS_TOKEN_LOCALSTORAGE_KEY);
    const response = await AuthURL.patch(
      `/profile`,
      { nickname },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data.success) {
      AuthData.setUser((prevUser) => ({
        ...prevUser,
        nickname: response.data.nickname,
      }));

      alert("닉네임이 변경되었습니다.");
      setNickname("");
    } else {
      alert("닉네임 변경에 실패했습니다.");
    }
    console.log("response", response);
  };
  console.log(AuthData.user);
  console.log(localStorage.getItem("token"));

  return (
    <div className="py-10 flex justify-center">
      <div>
        <h1 className="font-bold mb-3 text-2xl">프로필 수정</h1>
        <form onSubmit={handleSubmit} className="flex gap-3 flex-col">
          <div>
            <label>닉네임</label>
            <input
              id="nickname"
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
              className="w-full shadow-md p-2 rounded-xl"
            />
          </div>
          <button
            type="submit"
            className="w-full shadow-md p-2 bg-black text-white rounded-xl"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
