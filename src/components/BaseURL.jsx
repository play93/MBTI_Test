import axios from "axios";

const BaseURL = axios.create({
  baseURL: "http://localhost:5000",
});

export default BaseURL;
