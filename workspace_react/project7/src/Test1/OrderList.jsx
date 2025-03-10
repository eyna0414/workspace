
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    axios.get('/api/getOrderList')
      .then((res) => {
        console.log(res.data);
        setOrderList(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  

  return (
    <div>
      <div><h3>주문목록</h3></div>
      <div>
        <table className='table-list'>
          <colgroup>
            <col width={'10%'}/>
            <col width={'*'}/>
            <col width={'20%'}/>
            <col width={'20%'}/>
            <col width={'20%'}/>
          </colgroup>
          <thead>
            <tr>
              <td>No</td>
              <td>상품명</td>
              <td>상품가격</td>
              <td>수량</td>
              <td>총구매가격</td>
            </tr>
          </thead>
          <tbody>
            {
              orderList.map((order, i) => (
                <tr key={i}>
                  <td>{orderList.length - i}</td>
                  <td>{order.itemName}</td>
                  <td>{order.itemPrice}원</td>
                  <td>{order.itemAmount}</td>
                  <td>{order.itemPrice * order.itemAmount}원</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderList