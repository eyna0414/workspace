
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './common.css'
import ShopList from './components/ShopList'
import ShopJoin from './components/ShopJoin'
import ShopOrder from './components/ShopOrder'
import ShopOrderList from './components/ShopOrderList'
import Header from './components/Header'

function App() {
  //falsy : false로 판단하는 내용
  //null, undefined, 0, ''

  //truthy : falsy한 데이터 빼고 전부.
  

  return (
    <div className='container'>
      <Header/>

      <Routes>
          {/* 상품 정보 페이지 */}
          <Route path='/' element={<ShopList/>}/>

          {/* 상품 등록 페이지 */}
          <Route path='/reg-item' element={<ShopJoin/>}/>

          {/* 주문하기 페이지 */}
          <Route path='/order' element={<ShopOrder/>}/>

          {/* 주문목록 페이지 */}
          <Route path='/order-list' element={<ShopOrderList/>}/>

        </Routes>
    </div>
  )
}

export default App
