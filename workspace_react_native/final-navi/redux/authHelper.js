//redux폴더에 맞지않지만 
import * as SecureStore from 'expo-secure-store';
import { jwtDecode } from 'jwt-decode';
import { loginReducer, logoutReducer } from './authSlice';

/*
falsy : null, undefined, 0, 빈문자, NaN
//기존 방식 (OR 연산자 사용) - 왼쪽 데이터가 falsy일 때 오른쪽 데이터를 실행
const username = user.name || 'Guest';

//Nullish 병합 연산자 사용 - 왼쪽 데이터가 null 또는 undefined일 때만 오른쪽 데이터를 실행
const username = user.name ?? 'Guest';
*/


// 토큰에서 로그인한 회원 email 추출
// 토큰에서 Email 못 빼면 리턴 null, 있으면 email 반환
export const getUserSubFromToken = (token) => {
  if (!token) return null;
  //try문 실행! 오류 나면 try문 멈추고 catch문 실행!
  try {
    //jwtDecode(token) -> 암호화된 토큰을 해제
    const decoded = jwtDecode(token);

    // const result = '';
    // //if(decoded !== null && decoded !== undefined){
    // //}  아래와 같음
    //   if(decoded){
    //     result = decoded.name;
    //   }
    //   else{
    //     result = null
    //   }

    //? : 옵셔럴 체이닝 연산자
    //decoded가 null 또는 undefined -> undefined
    //데이터 있으면 sub 없으면 null
    return decoded?.sub || null;
  } catch (error) {
    console.log('jwtDecode 실패:', error);
    return null;
  }
};

export const getUserRoleFromToken = (token) => {
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded?.role || null;
  } catch (error) {
    console.log('jwtDecode 실패:', error);
    return null;
  }
};