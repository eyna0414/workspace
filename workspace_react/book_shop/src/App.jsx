
import { Route, Routes } from 'react-router-dom'
import './App.css'
import UserLayout from './components/UserLayout'
import AdminLayOut from './components/AdminLayOut'
import ItemForm from './components/ItemForm'
import CateManage from './components/CateManage'
import State변경함수흐름 from './practice/State변경함수흐름'
import Axios흐름 from './practice/Axios흐름'
import ShopButton from './common_component/Shopbutton'
import ShopInput from './common_component/ShopInput'
import Login from './components/Login'
import UserJoin from './components/UserJoin'
import ShopSelect from './common_component/ShopSelect'

function App() {
  

  return (
    <div className='container'>
      <ShopSelect>
        <option>1</option>
        <option>2</option>
      </ShopSelect>
      
      <Routes>

        {/* 유저가 접속하는 페이지 */}
        <Route path='/' element={ <UserLayout /> }>
          {/* 상품 목록 페이지 */}
          <Route path='' element={ <div>상품 목록 페이지</div> }/>

          {/* 상품 상세 페이지 */}
          <Route path='detail' element={<div> 상품 상세 페이지 </div>}/>

          {/* 로그인 페이지 */}
          <Route path='login' element={<Login />}/>

          {/* 회원가입 페이지 */}
          <Route path='user-join' element={<UserJoin/>}/>

        </Route>

        
        {/* 관리자가 접속하는 페이지 */}
        <Route path='/admin' element={<AdminLayOut/> }>
          {/* 상품등록 */}
          <Route path='reg-item' element={<ItemForm />}/>

          {/* 회원관리 */}
          <Route path='user-manage' element={ <div>회원관리</div>}/>

          {/* 카테고리 등록 페이지 */}
          <Route path='cate-manage' element={<CateManage />}/>
        </Route>
        
      </Routes>      
    </div>
  )
}

export default App
