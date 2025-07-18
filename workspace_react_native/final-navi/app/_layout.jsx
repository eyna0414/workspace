import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, ActivityIndicator, View } from 'react-native';
import 'react-native-reanimated';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from '@/redux/store';
import * as SecureStore from 'expo-secure-store';
import { loginReducer, logoutReducer } from '@/redux/authSlice';
import { jwtDecode } from 'jwt-decode';

// 스플래시 화면이 에셋 로딩이 완료될 때까지 유지되도록 설정
SplashScreen.preventAutoHideAsync();

// 인증 상태를 관리하는 컴포넌트
// 앱 실행 직 후 토큰이 SecureStorage에서 추출
// 추출할 동안 ActivityIndicator 그리고, 추출이 다 되면 원래 그림 그리기
const AuthManager = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  //dispatch-> 로그인 함수 실행
  const dispatch = useDispatch();
  //store에 저장 된 데이터 
  //state-> store에 저장된 모든 데이터
  const auth = useSelector(state => state.auth); //{token : null, isLogin : false}

  // 토큰 유효성 검사 및 로그인 상태 관리 함수
  const validateAndLoadToken = async () => {
    try {
      // SecureStore에서 토큰 가져오기
      const token = await SecureStore.getItemAsync('accessToken');
      
      // 토큰이 없으면 함수 종료
      if (!token) {
        return;
      }
      
      // 유효한 토큰이면 로그인 상태로 설정
      dispatch(loginReducer(token));
      
    } catch (error) {
      console.error('토큰 검증 중 오류:', error);
      dispatch(logoutReducer());
    } finally {
      // 인증 초기화 완료 표시
      setIsReady(true);
    }
  };

  // 컴포넌트 마운트 시 토큰 검증
  useEffect(() => {
    validateAndLoadToken();
  }, []);

  // 로딩 중 인디케이터 표시
  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return children;
}

// 앱의 루트 레이아웃
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // 폰트 로딩 완료 시 스플래시 화면 숨기기
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // 폰트 로딩 중이면 null 반환
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <AuthManager>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack screenOptions={{ headerShown: false }} />
          <StatusBar style="auto" translucent={false} />
        </SafeAreaView>
      </AuthManager>
    </Provider>
  );
}