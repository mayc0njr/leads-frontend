import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000" 
});

api.defaults.headers.get = {
  "Cache-control": "no-cache",
  Pragma: "no-cache",
  Expires: "0",
};

api.defaults.headers.put = {
  "Cache-control": "no-cache",
  Pragma: "no-cache",
  Expires: "0",
};

const errorHandler = (error: AxiosError) => {
  const statusCode = error.response?.status

  if (statusCode && statusCode !== 401) {
    console.error(error)
  }

  return Promise.reject(error)
}

api.interceptors.response.use(undefined, (error) => {
  return errorHandler(error)
})

export default api;