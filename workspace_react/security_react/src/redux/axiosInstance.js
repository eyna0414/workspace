import axios from "axios";

//axios 객채를 생성
//객체를 생성 후 해당 axios 객체를 사용하면
//동일한 설정 정보를 가지고 요청을 보낼 수 있음
export const axiosInstance = axios.create({
  baseURL : 'http://localhost:8080',
  withCredentials : true
});

//요청 시 실행 할 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');

    //토큰이 있으면 요청 헤더에 토큰 담아 보내기
    if(token) {
      config.headers.Authorization = token;
    }
    
    return config;
  }, 
  error => Promise.reject(error)
);