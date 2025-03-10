
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const OrderList = ({setOrder, setIsShow}) => {
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
              <th>No</th>
              <th>상품명</th>
              <th>상품가격</th>
              <th>수량</th>
              <th>총구매가격</th>
            </tr>
          </thead>
          <tbody>
            {
              orderList.map((order, i) => {
                return (
                  <tr key={i} 
                  onClick={(e) => {
                    for(let i = 0 ; i < orderList.length ; i++){
                      if(orderList[i].itemNum == order.itemNum){
                        setOrder(orderList[i]);
                      }
                    }
                    setIsShow(true);
                  }}>
                    <td>{orderList.length - i}</td>
                    <td>{order.itemName}</td>
                    <td>{order.itemPrice}원</td>
                    <td>{order.itemAmount}</td>
                    <td>{order.itemPrice * order.itemAmount}원</td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderList