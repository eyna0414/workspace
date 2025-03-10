package com.green.rest.controller;

import com.green.rest.dto.BoardDTO;
import com.green.rest.dto.ItemDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequestMapping("/items")

public class ItemController {

  //1. 모든 상품을 조회하는 기능을 제공하는 REST API
  @GetMapping("")
  public void getItemList(){
    log.info("모든 상품 조회");
  }

  //2. 상품 하나를 조회하는 기능을 제공하는 REST API
  @GetMapping("/{itemCode}")
  public void getItem(@PathVariable("itemCode") int itemCode){
    log.info("상품 정보 상세 조회");
    log.info("itemCode = " + itemCode);
  }


  //3. 상품 하나를 등록하는 기능을 제공하는 REST API
  @PostMapping("")
  public void insertBoard(@RequestBody ItemDTO itemDTO){
    log.info("상품 등록");
    log.info("itemDTO = " + itemDTO);
  }


  //4. 상품 하나를 삭제하는 기능을 제공하는 REST API
  @DeleteMapping("/{itemCode}")
  public void deleteItem(@PathVariable("itemCode") int itemCode){
    log.info("상품 삭제");
    log.info("itemCode = " + itemCode);
  }


  //5. 상품 하나의 상품명과 가격, 색상을 변경하는 기능을 제공하는 REST API

  @PutMapping("/{itemCode}")
  public void updateItem(@PathVariable("itemCode") int itemCode, @RequestBody ItemDTO itemDTO){
    log.info("상품 한 개 정보 변경");
    log.info("itemCode = " + itemCode);
    log.info("itemDTO = " + itemDTO);
  }

}
