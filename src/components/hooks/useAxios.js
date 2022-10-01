import { useContext } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { public_url } from "../../constants/Api";

const url = public_url;

function useAxios() {
  const [auth] = useContext(AuthContext);

  const apiClient = axios.create({
    public_url: url,
  });

  apiClient.interceptors.request.use(function (config) {
    const token = auth.token;
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });
  return apiClient;
}

export default useAxios;