import axios from "axios";

const instance = axios.create({
  baseURL: "https://flame-freelance-server-side.vercel.app",
});

const useAxios = () => {
  return instance;
};

export default useAxios;
