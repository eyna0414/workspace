import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../redux/cartListSlice';

const Test3 = () => {
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cartList);
  
  const [data, setData] = useState({
    cartNum : "",
    itemName : "",
    price : ""
  })
  
  const handleData = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div>
      <div>
        {
          cartList.map((cart, i) => {
            return (
              <div key={i}>{cart.cartNum} {cart.itemName} {cart.price}</div>
            )
          })
        }
        
      </div>
      <div>
        <div>
          장바구니번호 : 
          <input type='text' 
          name='cartNum'
          value={data.cartNum}
          onChange={e => handleData(e)}
          />
        </div>
        <div>
          상품명 : 
          <input type='text'
          name='itemName'
          value={data.itemName}
          onChange={e => handleData(e)}
          />
        </div>
        <div>
          가격 : 
          <input type='text'
          name='price'
          value={data.price}
          onChange={e => handleData(e)}
          />
        </div>
        <div>
          <button type='button' onClick={() => {
            dispatch(addCart(data));
          }}>등록</button>
        </div>
      </div>
      
      

    </div>
  )
}

export default Test3