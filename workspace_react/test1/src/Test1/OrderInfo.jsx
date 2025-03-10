import React, { useState } from 'react'
import OrderDetail from './OrderDetail'
import OrderList from './OrderList'
import './OrderInfo.css'

const OrderInfo = () => {
  //게시글 하나의 정보를 담을 state변수
    const [order, setOrder] = useState({});

    const [isShow, setIsShow] = useState(false);
  
    return (
    <>
      <div className="container">
        
        <OrderList setOrder={setOrder} setIsShow={setIsShow}/>
        {
          isShow ? <OrderDetail order={order}/> : null
        }
        

        
      
      </div>
    </>
  )
}

export default OrderInfo