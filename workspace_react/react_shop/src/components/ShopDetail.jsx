import React, { useEffect, useState } from 'react'
import styles from './ShopDetail.module.css'
import dayjs from 'dayjs'
import axios from 'axios';

const ShopDetail = ({itemInfo, setItemInfo, cnt, setCnt}) => {
  
  //값이 변경될 때마다 실행하는 함수
    const changeItemInfo = (e) => {
      setItemInfo({
        ...itemInfo,
        [e.target.name] : e.target.value
      })
    };



    //업데이트 기능 실행 함수
    const updateItem = () => {
      axios.put(`/api/items/${itemInfo.itemNum}`, itemInfo) 
        .then(res => {
          alert(`상품 정보가 변경되었습니다.`);
          setCnt(cnt + 1);
        })
      .catch(error => console.log(error));
    };
  

  return (
    <>
      <h3>상품 상세 정보</h3>
            <table className={styles.detail_table}>
              <tbody>
                <tr>
                  <td>상품번호</td>
                  <td><input readOnly={true} className='my-input wide' type="text" name='itemNum' value={itemInfo.itemNum}/></td>
                </tr>
                <tr>
                  <td>상품명</td>
                  <td><input className='my-input wide' type="text" value={itemInfo.itemName} name='itemName' onChange={e => changeItemInfo(e)}/></td>
                </tr>
                <tr>
                  <td>상품가격</td>
                  <td><input className='my-input wide' type="text" value={itemInfo.itemPrice} name='itemPrice' onChange={e => changeItemInfo(e)}/></td>
                </tr>
                <tr>
                  <td>판매자</td>
                  <td><input readOnly={true} className='my-input wide' type="text" value={itemInfo.seller} /></td>
                </tr>
                <tr>
                  <td>상품등록일</td>
                  <td><input readOnly={true} className='my-input wide' type="text" value={itemInfo.regDate ? dayjs(itemInfo.regDate).format('YYYY-MM-DD') : ''} /></td>
                </tr>
                <tr>
                  <td>상품설명</td>
                  <td><textarea value={itemInfo.itemIntro} name='itemIntro' onChange={e => changeItemInfo(e)}/></td>
                </tr>
              </tbody>
            </table>
            <div>
              <button className='btn btn-large' type='button' onClick={e => updateItem()}>수정</button>
              
            </div>


    </>
  )
}

export default ShopDetail