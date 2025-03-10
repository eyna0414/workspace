package com.green.rest.dto;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString

public class ItemDTO {

  private int itemCode;
  private String itemName;
  private int itemPrice;
  private String itemColor;

}
