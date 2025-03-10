package com.green.shop.mapper;

import com.green.shop.dto.ShopDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

//객체 생성 + 해당 파일에 쿼리를 싱행시킬 메서드가 정의되어 있다는 것을 인지시켜줌
@Mapper
public interface ShopMapper {
  //상품 하나를 등록 쿼리 실행 메서드
  public int insertItem(ShopDTO shopDTO);

  //모든 상품의 상품번호, 상품명, 가격, 상품등록일을 조회하는 쿼리를 실행하는 메서드
  public List<ShopDTO> getAllItem();

  //상품번호를 통해, 해당 상품의 모든 컬럼을 조회하는 쿼리를 실행하는 메서드
  public ShopDTO getItemCode(int itemCode);

  //특정 상품번호에 해당하는 상품을 삭제하는 쿼리를 실행하는 메서드
  public int deleteItem(int itemCode);

  //특정 상품번호에 해당하는 상품의 상품명, 가격, 상품설명을 수정하는 쿼리를 실행하는 메서드
  public int updateItem(ShopDTO shopDTO);

}
