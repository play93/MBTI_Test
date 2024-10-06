import AuthURL from "../components/AuthURL";
import { ACCESS_TOKEN_LOCALSTORAGE_KEY } from "../constants";

export const patchProfile = async (nickname) => {
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

  return response.data;
};
