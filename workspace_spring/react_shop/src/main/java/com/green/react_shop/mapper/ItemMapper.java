package com.green.react_shop.mapper;

import com.green.react_shop.dto.ItemDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ItemMapper {

  //상품 목록 조회 쿼리
  public List<ItemDTO> selectItemList (ItemDTO itemDTO);

  //상품 상세 정보 쿼리
  public ItemDTO selectItemDetail(int itemNum);

  //상품 등록 쿼리
  public void insertItem(ItemDTO itemDTO);

  //상품 수정 쿼리
  public void updateItem(ItemDTO itemDTO);
}
