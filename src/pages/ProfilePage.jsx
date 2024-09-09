import { useState } from "react";
import AuthURL from "../components/AuthURL";

const ProfilePage = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await AuthURL.put(`/profile`, {
      nickname,
    });
    console.log("response", response);
    setUser((prevUser) => ({ ...prevUser, nickname }));
  };

  return (
    <div className="py-10 flex justify-center">
      <div>
        <h1 className="font-bold mb-3 text-2xl">프로필 수정</h1>
        <form onSubmit={handleSubmit}>
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
