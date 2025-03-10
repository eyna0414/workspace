import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ShopOrder = () => {
  const nav = useNavigate();

  //조회한 상품 목록을 저장할 변수
  const [itemList, setItemList] = useState([]);

  //입력한 정보를 저장하는 변수
  const [orderData, setOrderData] = useState({
    itemNum : '',
    price : '상품을 선택하세요', 
    buyer : '',
    buyCnt : 1
  });

  console.log(orderData);
  
  //상품 주문 정보 입력 데이터를 저장할 state 변수
  useEffect(() => {
    axios.get('/api/items')
    .then(res => {
      setItemList(res.data);
    })
    .catch(error => console.log(error));
  }, []);


  //값이 바뀔때 실행하는 함수
  const changeOrderDate = (e) => {
    if(e.target.name === 'itemNum'){
      let itemPrice = 0;

      for(const item of itemList){
        if(item.itemNum == e.target.value){
          itemPrice = item.itemPrice;
        }
      }

      setOrderData({
        ...orderData,
        [e.target.name] : e.target.value,
        price : itemPrice
        //아래 내용 위 주석처리한 문법 대신 함
        //price : itemList.find((e) => {return e.itemNum == e.target.value}).itemPrice
      });
    }
    else{
      setOrderData({
        ...orderData,
        [e.target.name] : e.target.value
      });
    }

  }

  //주문 등록 함수
  const insertOrder = () => {
    axios.post('/api/orders', orderData)
    .then(res => {
      alert('주문 등록 완료');
      nav('/api/order-list')
    })
    .catch(error => console.log(error));
  }
  


  return (
    <>
      <div>상품 주문</div>
      
      <div>
        <table>
          <tbody>
            <tr>
              <td>주문상품</td>
              <td>
                <select name='itemNum' 
                value={orderData.itemNum} 
                onChange={e => changeOrderDate(e)}>
                <option value="">선택</option>
                  {
                    itemList.map((item, i) => {
                      return(
                        <option key={i} value={item.itemNum}>{item.itemName}</option>
                      )
                    })  
                  }
                </select>
              </td>
            </tr>
            <tr>
              <td>상품단가</td>
              <td><input readOnly={true} type="text" 
                name='price' 
                value={orderData.price}
                onChange={e => changeOrderDate(e)}/>
              </td>
            </tr>
            <tr>
              <td>주문자</td>
              <td><input type="text" 
                name='buyer' 
                value={orderData.buyer}
                onChange={e => changeOrderDate(e)}/>
              </td>
            </tr>
            <tr>
              <td>주문 수량</td>
              <td><input type="text" 
                name='buyCnt' 
                value={orderData.buyCnt}
                onChange={e => changeOrderDate(e)}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button type='button' onClick={() => insertOrder()}>주문하기</button>
      
    </>
  )
}

export default ShopOrder