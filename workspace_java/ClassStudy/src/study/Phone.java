package study;

public class Phone {
  String manufacturer;
  String model;
  String color;
  int price;
  String phoneNumber;


  public void setManufacturer(String manufacturer1) {
    manufacturer = manufacturer1;
  }

  public void setModel(String model1) {
    model = model1;
  }

  public void setColor(String color1) {
    color = color1;
  }

  public void setPrice(int price1) {
    price = price1;
  }

  public void setPhoneNumber(String phoneNumber1) {
    phoneNumber = phoneNumber1;
  }

  public void printInfo() {
    System.out.println("제조사 : " + manufacturer);
    System.out.println("모델명 : " + model);
    System.out.println("색상 : " + color);
    System.out.println("가격 : " + price);
    System.out.println("휴대폰 번호 : " + phoneNumber);
  }

}

