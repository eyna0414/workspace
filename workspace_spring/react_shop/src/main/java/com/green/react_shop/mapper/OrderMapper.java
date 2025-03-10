package com.green.react_shop.mapper;

import com.green.react_shop.dto.ItemDTO;
import com.green.react_shop.dto.OrderDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderMapper {

  //주문 등록 쿼리
  public void insertOrder(OrderDTO orderDTO);

  //주문 목록조회 쿼리
  public List<OrderDTO> orderItemList ();
}
