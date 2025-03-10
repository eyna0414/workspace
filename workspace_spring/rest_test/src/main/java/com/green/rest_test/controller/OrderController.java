package com.green.rest_test.controller;

import com.green.rest_test.dto.OrderDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@Slf4j
@RequestMapping("/getOrderList")
public class OrderController {

  //1) 모든 주문정보를 조회하는 기능을 제공하는 REST API
  @GetMapping("")
  public List<OrderDTO> sendOrderList(){
    List<OrderDTO> orderList = new ArrayList<>();
    orderList.add(new OrderDTO(101, "데님 청바지", 15000, 2, "abc"));
    orderList.add(new OrderDTO(102, "맨투맨 반팔 티셔츠", 10000, 3, "bbb"));
    orderList.add(new OrderDTO(103, "오버핏 니트", 25000, 2, "ccc"));
    orderList.add(new OrderDTO(104, "롱 패딩", 55000, 1, "ddd"));
    orderList.add(new OrderDTO(105, "맨투맨 긴팔 티셔츠", 12000, 3, "eee"));

    return orderList;
  }

  //2) 하나의 주문정보를 조회하는 기능을 제공하는 REST API
  @GetMapping("/{itemNum}")
  public void getOrder(@PathVariable("itemNum") int itemNum){
    log.info("주문 정보 상세 조회");
    log.info("itemNum = " + itemNum);
  }

  //3) 하나의 주문정보를 등록하는 기능을 제공하는 REST API
  @PostMapping("")
  public void insertOrder(@RequestBody OrderDTO orderDTO){
    log.info("주문 정보 등록");
    log.info("OrderDTO = " + orderDTO);
  }

  //4) 하나의 주문정보를 삭제하는 기능을 제공하는 REST API
  @DeleteMapping("/{itemNum}")
  public void deleteOrder(@PathVariable("itemNum") int itemNum){
    log.info("주문 정보 삭제");
    log.info("itemNum = " + itemNum);
  }


  //5) 하나의 주문정보에서 상품명과 상품가격을 수정하는 기능을 제공하는 REST API
  @PutMapping("/{itemNum}")
  public void updateOrder(@PathVariable("itemNum") int itemNum, @RequestBody OrderDTO orderDTO){
    log.info("주문 정보 변경");
    log.info("itemNum = " + itemNum);
    log.info("OrderDTO = " + orderDTO);
  }

}
