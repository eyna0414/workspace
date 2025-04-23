import './App.css'
import { Link, Route, Routes } from 'react-router'
import Login from './components/Login'
import Join from './components/Join'
import Admin from './components/Admin'
import UserPage from './components/UserPage'
import Header from './components/Header'
import Menu from './components/Menu'
import { jwtDecode } from 'jwt-decode'
import { useEffect } from 'react'
import { axiosInstance } from './redux/axiosInstance'
import ProtectedRoute from './components/ProtectedRoute'
import ProtectedAdminRoute from './components/ProtectedAdminRoute'


function App() {

  useEffect(() => {
    axiosInstance.get('/test1')
    .then().catch();
  }, [])
  // const test = jwtDecode('Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTc0NDI2NTc4MSwiZXhwIjoxNzQ0MjY3NTgxfQ.vI_gwjJj8RWMuXBKlhGQIuWI5Dgdj9uio6VAOjn3lsJ6b3WBtBV91hyDK7MVryE-IbHBMjznxe_upzvvUkSXKg')

  // console.log(test);

  return (
    <div>
      <Header />
      <Menu />
      <Routes>
          <Route path='' element={<div>메인페이지</div>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/join' element={<Join />}/>

          <Route path='/user' element={
            <ProtectedRoute>
              <UserPage/>
            </ProtectedRoute>}/>     

          <Route path='/admin' element={
            <ProtectedAdminRoute>
              <Admin />
            </ProtectedAdminRoute>}/>
      </Routes>
    </div>
  )
}

export default App

