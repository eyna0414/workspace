
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import BoardList from './components/BoardList'
import BoardDetail from './components/BoardDetail'

function App() {

  return (
    <>
      <Header/>

      <Routes>
        {/* 게시글 목록 페이지 */}
        <Route path='' element={ <BoardList /> }/>
        
        {/* 게시글 상세 페이지 */}
        <Route path='/detail' element={ <BoardDetail/> }/>
        {/* 게시글 등록 페이지 */}
        
        {/* 게시글 수정 페이지 */}
        
        {/* 로그인 페이지 */}
        <Route path='/login' element={ <Login/> }/>

      </Routes>
      
    </>
  )
}

export default App
