import React, { useState } from 'react'

const OrderDetail = ({order}) => {

  return (
    <div>
      <div><h3>주문상세정보</h3></div>
      <div>
        <table className='table-detail'>
        <colgroup>
            <col width={'25%'}/>
            <col width={'25%'}/>
            <col width={'25%'}/>
            <col width={'25%'}/>
          </colgroup>
          <tbody>
            <tr>
              <td>상품번호</td>
              <td>{order.itemNum}</td>
              <td>상품명</td>
              <td>{order.itemName}</td>
            </tr>
            <tr>
              <td>가격</td>
              <td>{order.itemPrice}</td>
              <td>수량</td>
              <td>{order.itemAmount}</td>
            </tr>
            <tr>
              <td>주문자ID</td>
              <td>{order.orderId}</td>
              <td>구매가격</td>
              <td>{order.itemPrice * order.itemAmount}원</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderDetail