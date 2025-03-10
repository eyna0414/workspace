package study;

public class Student_2 {
  String name;
  int age;
  String address;
  int number;
  String hp;


  public void setAllInfo(String name1, int age1, String address1, int number1, String hp1){
    name = name1;
    age = age1;
    address = address1;
    number = number1;
    hp = hp1;
  }

  public void setName(String name1){
    name = name1;
  }

  public void setAge(int age1){
    age = age1;
  }

  public void setAddress(String address1){
    address = address1;
  }

  public void setNumber(int number1){
    number = number1;
  }

  public void setHp(String hp1){
    hp = hp1;
  }

  public String getName(){
    return name;
  }

  public int getAge(){
    return age;
  }

  public String getAddress(){
    return address;
  }

  public int getNumber(){
    return number;
  }

  public String getHp(){
    return hp;
  }



  public void printInfo(){
    System.out.println("이름 : " + name);
    System.out.println("나이 : " + age);
    System.out.println("주소 : " + address);
    System.out.println("학번 : " + number);
    System.out.println("연락처 : " + hp);
  }

}
