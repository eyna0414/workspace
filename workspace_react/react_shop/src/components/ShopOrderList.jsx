import axios from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'

const ShopOrderList = () => {
  //주문 정보 목록을 저장할 state 변수
    const [orderList, setOrderList] = useState([]);

  //주문 정보 조회
  useEffect(() => {
    axios.get('api/orders')
    .then(res => {
      console.log(res.data)
      setOrderList(res.data)})
    .catch(error => console.log(error));
  }, []);

  return (
    <>
      <div>총 {orderList.length}건의 주문정보가 검색되었습니다.</div>
      <table>
        <colgroup>
          <col width={''}/>
          <col width={''}/>
          <col width={''}/>
          <col width={''}/>
          <col width={''}/>
          <col width={''}/>
        </colgroup>
        <thead>
          <tr>
            <th>No</th>
            <th>상품명</th>
            <th>상품단가</th>
            <th>구매수량</th>
            <th>구매가격</th>
            <th>주문자</th>
            <th>주문일</th>
          </tr>
        </thead>
        <tbody>
          {
            orderList.map((order, i) => {
              return(
                <tr key={i}>
                  <td>{orderList.length - i}</td>
                  <td>{order.itemDTO.itemName}</td>
                  <td>{order.itemDTO.itemPrice}</td>
                  <td>{order.buyCnt}</td>
                  <td>{order.buyPrice}</td>
                  <td>{order.buyer}</td>
                  <td>{dayjs(order.buyDate).format('YYYY.MM.DD')}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      
      <table>
        <tr>
          <td>총 주문금액</td>
          <td>{}</td>
        </tr>
      </table>
    </>
  )
}

export default ShopOrderList