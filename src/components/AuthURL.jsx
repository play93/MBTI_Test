import axios from "axios";

const AuthURL = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});

export default AuthURL;
