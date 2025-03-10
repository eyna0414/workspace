package com.green.shop.service;

import com.green.shop.dto.ShopDTO;
import com.green.shop.mapper.ShopMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//핵심 기능 구현
//핵심 기능은 쿼리 실행이라고 생각하면 된다
// -> 쿼리 실행을 위해서는 shopMapper 인터페이스의 객체가 있어야 한다.
@Service
public class ShopServiceImpl implements ShopService{
  private ShopMapper shopMapper;

  @Autowired //생략가능
  public ShopServiceImpl(ShopMapper shopMapper){
    this.shopMapper = shopMapper;
  }

  //상품 하나 등록 기능
  @Override
  public int insertItem(ShopDTO shopDTO) {
    System.out.println("상품의 재고를 확인한다");
    System.out.println("상품에 이상이 없는지 확인한다");
    //상품을 등록한다. -> 쿼리실행
    int result = shopMapper.insertItem(shopDTO);
    System.out.println("잘 등록되었는지 확인한다");
    return result;
  }

  //모든 상품의 상품번호, 상품명, 가격, 상품등록일 조회 기능
  @Override
  public List<ShopDTO> getAllItem() {
    return shopMapper.getAllItem();
  }

  //상품번호를 통해, 해당 상품의 모든 컬럼을 조회 기능
  @Override
  public ShopDTO getItemCode(int itemCode) {
    return shopMapper.getItemCode(itemCode);
  }

  //특정 상품번호에 해당하는 상품을 삭제 기능
  @Override
  public int deleteItem(int itemCode) {
    return shopMapper.deleteItem(itemCode);
  }

  //특정 상품번호에 해당하는 상품의 상품명, 가격, 상품설명 수정 기능 실행 메서드
  @Override
  public int updateItem(ShopDTO shopDTO) {
    return shopMapper.updateItem(shopDTO);
  }
}
