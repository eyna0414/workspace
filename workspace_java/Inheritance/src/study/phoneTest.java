package study;

public class phoneTest {
  public static void main(String[] args) {
    MobilePhone p1 = new MobilePhone();
    SmartPhone p2 = new SmartPhone();

    //부모클래스는 자식클래스의 객체를 받아들임
    MobilePhone p3 = new SmartPhone();
    //자식클래스는 부모클래스의 객체를 수용X
    //SmartPhone p4 = new MobilePhone(); 오류 발생!



  }
}
