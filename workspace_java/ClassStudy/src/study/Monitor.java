package study;

public class Monitor {
  String brand;
  String color;
  double inch;

  //default 생성자
  //생성자는 오버로딩 개념을 통해 여러 개 생성 가능
  public Monitor(){
    brand = "삼성";
  }
  public Monitor(String brand){
    this.brand = brand;
  }

  public Monitor(String brand, String color){
    this.brand = brand;
    this.color = color;
    inch = 24.0;
  }

  public void printInfo(){
    System.out.println("브랜드 : " + brand);
    System.out.println("색상 : " + color);
    System.out.println("인치 : " + inch);
  }

}

/*
* 생성자 문법
* - public 클래스명(){}
* 목적 : 멤버변수의 초기값 설정을 위해 생성자 사용
* 클래서 생성자 하나도 없으면 시본 생성자 자동으로 생성
* 생성자는 메서드 오버로딩 문법으로 여러 개 생성 가능
* 생성자를 하나라도 만들면 기본생성자가 자동으로 만들어지지 않기 때문에 주의
* */
