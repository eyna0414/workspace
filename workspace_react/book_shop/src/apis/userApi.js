import axios from "axios"

/**
 * 회원가입
 */
export const regUser = (joinData) => {
  const response = axios.post('/api/users', joinData);
  return response;
}