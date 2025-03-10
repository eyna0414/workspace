package study;

public class Member {
  String name;
  String id;
  String password;
  int age;

  public void setAllInfo(String name, String id, String password, int age){
    //이 클래스에서 정의된 name
    this.name = name;
    this.id = id;
    this.password = password;
    this.age = age;
  }


  public void printInfo() {
    System.out.println("이름 : " + name);
    System.out.println("아이디 : " + id);
    System.out.println("비밀번호 : " + password);
    System.out.println("나이 : " + age);
  }






}
