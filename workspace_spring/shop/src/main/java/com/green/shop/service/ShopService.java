package com.green.shop.service;

import com.green.shop.dto.ShopDTO;

import java.util.List;

//핵심 기능을 정의한 인터페이스
//핵심 기능 : 쿼리 작업
public interface ShopService {
  //상품 하나 등록 기능
  public int insertItem(ShopDTO shopDTO);

  //모든 상품의 상품번호, 상품명, 가격, 상품등록일 조회 기능
  public List<ShopDTO> getAllItem();

  //상품번호를 통해, 해당 상품의 모든 컬럼을 조회 기능
  public ShopDTO getItemCode(int itemCode);

  //특정 상품번호에 해당하는 상품을 삭제 기능
  public int deleteItem(int itemCode);

  //특정 상품번호에 해당하는 상품의 상품명, 가격, 상품설명 수정 기능
  public int updateItem(ShopDTO shopDTO);

}
