package com.green.react_shop.controller;

import com.green.react_shop.dto.ItemDTO;
import com.green.react_shop.service.ItemService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/items")
public class ItemController {
  private final ItemService itemService;


  //상품목록 조회 rest api
  @GetMapping("")
  public List<ItemDTO> getItemList(ItemDTO itemDTO){
    return itemService.selectItemList(itemDTO);
  }

  //상품상세정보 조회 rest api
  @GetMapping("/{itemNum}")
  public ItemDTO getItemDetail(@PathVariable("itemNum") int itemNum){
    return itemService.selectItemDetail(itemNum);
  }

  //상품등록 rest api
  @PostMapping("")
  public void insertItem(@RequestBody ItemDTO itemDTO){
    itemService.insertItem(itemDTO);
  }

  //상품수정 rest api
  @PutMapping("/{itemNum}")
  public void updateItem(@PathVariable("itemNum") int itemNum, @RequestBody ItemDTO itemDTO){
    itemDTO.setItemNum(itemNum);
    itemService.updateItem(itemDTO);
  }

  //상품수정 rest api 다른 방법
//  @PutMapping("")
//  public void updateItem(@RequestBody ItemDTO itemDTO){
//    itemService.updateItem(itemDTO);
//  }



}
