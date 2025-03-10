package com.green.First;


public class OrderDTO {
  private int itemNum;     // 상품번호
  private String itemName; // 상품명
  private int itemPrice;   // 가격
  private int itemAmount;  // 수량
  private String orderId;  // 주문자 ID

  public OrderDTO(int itemNum, String itemName, int itemPrice, int itemAmount, String orderId) {
    this.itemNum = itemNum;
    this.itemName = itemName;
    this.itemPrice = itemPrice;
    this.itemAmount = itemAmount;
    this.orderId = orderId;
  }

  public int getItemNum() {
    return itemNum;
  }

  public void setItemNum(int itemNum) {
    this.itemNum = itemNum;
  }

  public String getItemName() {
    return itemName;
  }

  public void setItemName(String itemName) {
    this.itemName = itemName;
  }

  public int getItemPrice() {
    return itemPrice;
  }

  public void setItemPrice(int itemPrice) {
    this.itemPrice = itemPrice;
  }

  public int getItemAmount() {
    return itemAmount;
  }

  public void setItemAmount(int itemAmount) {
    this.itemAmount = itemAmount;
  }

  public String getOrderId() {
    return orderId;
  }

  public void setOrderId(String orderId) {
    this.orderId = orderId;
  }
}
