package com.green.shop.controller;

import com.green.shop.dto.ShopDTO;
import com.green.shop.mapper.ShopMapper;
import com.green.shop.service.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/items")
public class ShopController {
  private ShopService shopService;

  @Autowired //생략가능 클래스 생성자가 1개만 있으면 필수!
  public ShopController(ShopService shopService){
    this.shopService = shopService;
  }

  //상품 하나를 등록하는 기능 API
  @PostMapping("")
  public int regItem(@RequestBody ShopDTO shopDTO){
    System.out.println(shopDTO);
    //매개변수에는 ShopDTO 자료형이 들어와야 함
    //매개변수로 쿼리의 빈 값을 채워 줄 거임.

    //->상품명, 상품가격, 상품설명 3개 데이터가 들어있는 shopDTO 객체를 매개변수로 전달해야야 함.
    return shopService.insertItem(shopDTO);
  }

  //모든 상품의 상품번호, 상품명, 가격, 상품등록일 조회 기능 API
    @GetMapping("")
    public List<ShopDTO> getAllIem(){
      return shopService.getAllItem();
    }

  //상품번호를 통해, 해당 상품의 모든 컬럼을 조회 기능 API
    @GetMapping("/{itemCode}")
    public ShopDTO getItemCode(@PathVariable("itemCode") int itemCode){
      return shopService.getItemCode(itemCode);
   }

  //특정 상품번호에 해당하는 상품을 삭제 기능 API
    @DeleteMapping("/{itemCode}")
    public void deleteItem(@PathVariable("itemCode") int itemCode){
      shopService.deleteItem(itemCode);
    }

  //특정 상품번호에 해당하는 상품의 상품명, 가격, 상품설명 수정 기능 API
    @PutMapping("/{itemCode}")
    public void updateItem(@PathVariable("itemCode") int itemCode, @RequestBody ShopDTO shopDTO) {
      shopDTO.setItemCode(itemCode);
      shopService.updateItem(shopDTO);
    }

    //옛날방식
    //locallhost:8080/items/update
    @PostMapping("/{update}")
    public void updateItem1(@RequestBody ShopDTO shopDTO){
    shopService.updateItem(shopDTO);
    }


}
