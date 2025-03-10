package com.green.react_shop.service;

import com.green.react_shop.dto.OrderDTO;
import com.green.react_shop.mapper.OrderMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
  private final OrderMapper orderMapper;


  //주문 등록 기능
  @Override
  public void insertOrder(OrderDTO orderDTO) {
    orderMapper.insertOrder(orderDTO);
  }

  //주문 목록조회 기능
  @Override
  public List<OrderDTO> orderItemList() {
    return orderMapper.orderItemList();
  }
}
