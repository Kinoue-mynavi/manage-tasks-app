import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// axiosInstance.interceptors.request.use((config) => {
//   const accessToken = 'accessToken';
//   config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
//   return config;
// });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // BagSnagなどのエラーハンドリングツールを使用する場合はここでエラーを送信
    return Promise.reject(error);
  },
);

export default axiosInstance;
