package com.green.react_shop.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Setter
@Getter
@ToString
public class OrderDTO {
  private int orderNum;
  private int itemNum;
  private String buyer;
  private int buyCnt;
  private int buyPrice;
  private LocalDateTime buyDate;

  private int price;
  private ItemDTO itemDTO;

}
