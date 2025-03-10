import axios from 'axios'
import React, { useState } from 'react'

const Axios_8 = () => {
  //모든 입력값을 저잘할 state 변수
  const [order, setOrder] = useState ({
    food : '',
    cnt : 1,
    add : "topping",
    request : '',
    data : ''
  })

  //모든 입력 값이 변경될 때 마다 실행시킬 함수
  const changeOrder = (e) => {
    // order state 변수의 변경 => setOrder();
    setOrder({
      ...order,
      [e.target.name]: e.target.value
    });
  }

  //전송버튼 클릭 시 서버로 데이터를 보내는 기능의 함수
  const sendData = () => {
    axios.post('/api/t9', order)
    .then((res) => {
      console.log(res);
    })
    .catch();
  }

  return (
    <>
      <div>Axios_8</div>
      
      <table>
        <colgroup>
          <col width={'25%'}/>
          <col width={'*'}/>
        </colgroup>
        <tbody>
          <tr>
            <td>음식 선택</td>
            <td>
              <select value={order.food} 
              name='food' 
              onChange={(e) => {
                changeOrder(e);
              }}>
                <option value="">선택</option>
                <option value="치킨">치킨</option>
                <option value="피자">피자</option>
                <option value="족발">족발</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>수량</td>
            <td>
            <input type="number" 
            value={order.cnt} 
            name='cnt' 
            onChange={(e) => {
              changeOrder(e);
            }}/>
            </td>
          </tr>
          <tr>
            <td>추가선택</td>
            <td>
              <input 
                type="radio" 
                name='add' 
                value="topping"
                checked={order.add === 'topping'}
                onChange={(e) => {
                  changeOrder(e);
                }}
                />토핑추가
              <input 
                type="radio" 
                name='add' 
                value="drinking"
                checked={order.add === 'drinking'}
                onChange={(e) => {
                  changeOrder(e);
                }}
                />음료추가
              <input 
                type="radio" 
                name='add' 
                value="rice"
                checked={order.add === 'rice'}
                onChange={(e) => {
                  changeOrder(e);
                }}
                />공기밥추가
            </td>
          </tr>
          <tr>
            <td>요청사항</td>
            <td>
              <textarea 
              rows={5} cols={40} 
              name='request'
              value={order.request} 
              onChange={(e) => {
                changeOrder(e);
              }}></textarea>
            </td>
          </tr>
          <tr>
            <td>주문일시</td>
            <td>
              <input type="date" 
              name='data'
              value={order.data} 
              onChange={(e) => {
                changeOrder(e);
              }}/>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button type='button' 
        onClick={(e) => {
          sendData();
        }}>전송</button>
      </div>
    </>
  )
}

export default Axios_8