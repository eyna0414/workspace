package com.green.react_shop.controller;

import com.green.react_shop.dto.OrderDTO;
import com.green.react_shop.mapper.OrderMapper;
import com.green.react_shop.service.OrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/orders")
public class OrderController {
  private final OrderService orderService;

  //주문 등록 기능
  @PostMapping("")
  public void insertOrder(@RequestBody OrderDTO orderDTO){
    orderService.insertOrder(orderDTO);
  }

  //주문 목록조회 기능
  @GetMapping("")
  public List<OrderDTO> orderItemList(){
    return orderService.orderItemList();
  }
}

