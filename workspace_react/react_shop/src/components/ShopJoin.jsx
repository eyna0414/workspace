import React, { useState } from 'react'
import styles from './ShopJoin.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ShopJoin = () => {
  const nav = useNavigate();

  // 입력 데이터를 저장할 변수
  const [itemData, setItemDate] = useState({
    itemName : "",
    itemPrice : "",
    seller : "",
    itemIntro : ""
  })

  const changeItemData = (e) => {
    setItemDate({
      ...itemData,
      [e.target.name] : e.target.value
    })
  }

  //상품 등록 함수
  const insertItem = () => {
    if(itemData.itemName === '' || itemData.itemPrice === ''){ //!(itemData.itemName && itemData.itemPrice)
      alert('상품명과 가격은 필수입력입니다.');
      return;
    }
    
    axios.post('/api/items', itemData)
    .then(() => {
      alert('상품 등록 완료')
      nav('/');
    })
    .catch(error => console.log(error));
  }

  return (
    <>
      <div className={styles.item_insert_container}>
      <div>상품 상세 정보</div>
        <table className={styles.item_insert_table}>
          <colgroup>
          
          </colgroup>
          <tbody>
            <tr>
              <td>상품명</td>
              <td><input type="text" className='my-input wide' name='itemName' value={itemData.itemName} onChange={e => changeItemData(e)} /></td>
            </tr>
            <tr>
              <td>상품가격</td>
              <td><input type="text" className='my-input wide'  name='itemPrice' value={itemData.itemPrice} onChange={e => changeItemData(e)}/></td>
            </tr>
            <tr>
              <td>판매자</td>
              <td><input type="text" className='my-input wide'  name='seller' value={itemData.seller} onChange={e => changeItemData(e)}/></td>
            </tr>
            <tr>
              <td>상품설명</td>
              <td><textarea className='my-input wide'  name='itemIntro' value={itemData.itemIntro} onChange={e => changeItemData(e)}></textarea></td>
            </tr>
          </tbody>
        </table>

        <div className={styles.btn_div}>
          <button type='button' className='btn btn-large' onClick={e => insertItem(e)}>등록</button>
        </div>
      </div>
      
      
    </>
  )
}

export default ShopJoin