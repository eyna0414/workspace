package study;

public class Man {
  String name;
  int age;
  String address;

  //멤버 변수의 모든 값을 초기화 할 수 있는 메소드
  public void initMember(String name, int age, String address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  //Generate-Getter and Setter
  //setter 데이터 변경 시 사용
  //getter 데이터를 읽어올 때 사용

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }


  //멤버 변수 각각의 값을 변경하는 메서드
  //setter 만드세요~
  //setter -> 멤버변수 하나의 값을 변경시키는 메서드
  //       -> setter 메서드는 이름이 정해져 있음(set멤버변수명)

  //name값을 변경하는 setter 메서드 정의
//  public void setName(String name){
//    this.name = name;
//  }
//  public void setAge(int age){
//    this.age = age;
//  }
//  public void setAddress(String address){
//    this.address = address;
//  }
//

  //각 멤버변수의 값을 리턴하는 메소드
  //getter -> 멤버변수 하나의 값을 리턴하는 메서드
  //       -> 메서드의 이름 : get변수명
//  public String getName(){
//    return name;
//  }
//
//  public int getAge(){
//    return age;
//  }
//
//  public String getAddress(){
//    return address;
//  }

  //멤버변소의 모든 정보를 출력하는 메소드
  public void printInfo(){
    System.out.println("이름 : " + getName());
    System.out.println("나이 : " + age);
    System.out.println("주소 : " + address);
  }

}
