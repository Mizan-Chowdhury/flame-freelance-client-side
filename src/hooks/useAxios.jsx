import axios from "axios";

const instance = axios.create({
  baseURL: "https://flame-freelance-server-side.vercel.app",
//   withCredentials: true
});

const useAxios = () => {
  return instance;
};

export default useAxios;
