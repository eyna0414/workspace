package study;


public class SmartPhone {
  //멤버 변수
  private String medelName;
  private int price;
  private double inch;

  //생성자
  public SmartPhone(){
    medelName = "";
    price = 0;
    inch = 0.0;
  }

  //
  public SmartPhone(String medelName, int price, double inch) {
    this.medelName = medelName;
    this.price = price;
    this.inch = inch;
  }

  //getter, setter

  public String getMedelName() {
    return medelName;
  }

  public void setMedelName(String medelName) {
    this.medelName = medelName;
  }

  public int getPrice() {
    return price;
  }

  public void setPrice(int price) {
    this.price = price;
  }

  public double getInch() {
    return inch;
  }

  public void setInch(double inch) {
    this.inch = inch;
  }

  public void printInfo(){
    System.out.println("모델명 : " + medelName);
    System.out.println("가격 : " + price);
    System.out.println("크기 : " + inch);
  }

}
