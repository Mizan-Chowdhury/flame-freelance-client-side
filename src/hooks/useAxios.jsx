import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

// https://flame-freelance-server-side.vercel.app

const useAxios = () => {
  return instance;
};

export default useAxios;
