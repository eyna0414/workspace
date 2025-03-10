
import { Route, Routes } from 'react-router-dom'
import './App.css'
import BoardList from './components/boardList'
import BoardDetail from './components/BoardDetail'
import BoardJoin from './components/BoardJoin'
import BoardUpdate from './components/BoardUpdate'
import InputTest from './components/inputTest'
import BoardReply from './components/BoardReply'
import QueryString from './components/QueryString'
import UseEffectTest from './components/UseEffectTest'

function App() {

  return (
    <>
      <div className='container'>
        <h1>게시판 프로젝트</h1>
        <Routes>
          {/* 게시글 목록 페이지 */}
          <Route path='/' element={<BoardList/>}/>
  
          {/* 게시글 상세보기 페이지 */}
          <Route path='/detail/:boardNum' element={<BoardDetail/>}/>
  
          {/* 게시글 작성 페이지 */}
          <Route path='/join' element={<BoardJoin/>}/>
  
          {/* 게시글 수정 페이지 */}
          <Route path='/update/:boardNum' element={<BoardUpdate/>}/>

          {/* 쿼리 스트링 연습 페이지 */}
          <Route path='/test' element={<QueryString/>}/>

        </Routes>

        {/* <InputTest /> */}
        {/* <UseEffectTest/> */}
        
      
      </div>
    


    </>
  )
}

export default App
