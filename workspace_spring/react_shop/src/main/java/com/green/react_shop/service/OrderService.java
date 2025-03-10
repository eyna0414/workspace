package com.green.react_shop.service;

import com.green.react_shop.dto.OrderDTO;

import java.util.List;

public interface OrderService {

  //주문 등록 기능
  public void insertOrder(OrderDTO orderDTO);

  //주문 목록조회 기능
  public List<OrderDTO> orderItemList ();
}
