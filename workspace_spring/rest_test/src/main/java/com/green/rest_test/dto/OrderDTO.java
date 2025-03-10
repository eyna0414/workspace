package com.green.rest_test.dto;


public class OrderDTO {

  private int itemNum;
  private String itemName;
  private int itemPrice;
  private int itemAmount;
  private String orderId;

  public OrderDTO(){

  }

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
