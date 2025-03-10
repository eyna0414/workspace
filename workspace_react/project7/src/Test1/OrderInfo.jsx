import React, { useState } from 'react'
import OrderDetail from './OrderDetail'
import OrderList from './OrderList'
import './OrderInfo.css'

const OrderInfo = () => {
  //게시글 하나의 정보를 담을 state변수
    const [order, setOrder] = useState({});
  
    return (
    <>
      <div className="container">
        
        <OrderList/>

        <OrderDetail/>
        
      
      </div>
    </>
  )
}

export default OrderInfo