import axios from 'axios';
import dayjs from 'dayjs';
import styles from './ShopList.module.css'
import React, { useEffect, useState } from 'react'
import ShopDetail from './ShopDetail';

const ShopList = () => {
  //상품 정보 목록을 저장할 state 변수
  const [itemList, setItemList] = useState([]);

  //상품 상세 정보 조회 데이터를 저장 할 state 변수
  const [itemInfo, setItemInfo] = useState(null);

  //상세 정보 내용 숨김 변수
  //const [isShow, setIsShow] = useState(false);

  const [cnt, setCnt] = useState(0);

  
  //상품 목록 조회
  useEffect(() => {
    axios.get('/api/items')
    .then(res => {
      setItemList(res.data);
    })
    .catch(error => console.log(error))
  }, []);


  //상품명 클릭 시 상세 정보 조회 함수
  const getItemInfo = (itemNum) => {
    axios.get(`/api/items/${itemNum}`)
    .then(res => {
      setItemInfo(res.data);
      //setIsShow(true);
    })
    .catch(error => console.log(error));
  }

  


  return (
    <>
      <div className={styles.item_info_container}>
        <div className={styles.list_div}>
          <h3>상품 목록</h3>
          <div>
            <table className={styles.list_table}>
              <colgroup>
                <col width={''}/>
                <col width={''}/>
                <col width={''}/>
                <col width={''}/>
              </colgroup>
              <thead>
                <tr>
                  <th>No</th>
                  <th>상품명</th>
                  <th>상품가격</th>
                  <th>판매자</th>
                </tr>
              </thead>
              <tbody>
                {
                  itemList.length === 0
                  ?
                  <tr>
                    <td colSpan={4}>등록된 상품이 없습니다.</td>
                  </tr>
                  :
                  itemList.map((item, i) => {
                    return(
                      <tr key={i}>
                        <td>{itemList.length - i}</td>
                        <td>
                          <span onClick={e => getItemInfo(item.itemNum)}>{item.itemName}</span>
                        </td>
                        <td>￦{item.itemPrice.toLocaleString()}</td>
                        <td>{item.seller}</td>
                      </tr>
                    )

                  })
                }
                
              </tbody>
            </table>
          </div>
          <p>총 {itemList.length}개의 상품이 등록되었습니다.</p>
        </div>

        <div className={styles.detail_div}>
        {
          //isShow ? <ShopDetail itemInfo={itemInfo}/> : null
          itemInfo && 
          <ShopDetail itemInfo={itemInfo} setItemInfo={setItemInfo} setCnt={setCnt} cnt={cnt}/>
        }
        </div>

        


      </div>
    </>
  )
}

export default ShopList