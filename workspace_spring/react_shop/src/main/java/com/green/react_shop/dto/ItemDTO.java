package com.green.react_shop.dto;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;


import java.time.LocalDateTime;

@Setter
@Getter
@ToString
@RequiredArgsConstructor
public class ItemDTO {
  private int itemNum;
  private  String itemName;
  private int itemPrice;
  private String seller;
  private String itemIntro;
  private LocalDateTime regDate;

}
