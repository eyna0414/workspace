package com.green.First;

//DTO : Data Transfer Object
// -> 데이터를 이동시켜주는 객체
public class PhoneDTO {
  private String brand;
  private int price;
  private String color;

  public String getBrand() {
    return brand;
  }

  public void setBrand(String brand) {
    this.brand = brand;
  }

  public String getColor() {
    return color;
  }

  public void setColor(String color) {
    this.color = color;
  }

  public int getPrice() {
    return price;
  }

  public void setPrice(int price) {
    this.price = price;
  }

  @Override
  public String toString() {
    return "PhoneDTO{" +
            "brand='" + brand + '\'' +
            ", price=" + price +
            ", color='" + color + '\'' +
            '}';
  }
}


