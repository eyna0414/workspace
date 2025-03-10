package study;
//다형성: 부모클래스로 자식클래스의 객체 생성 가능

//클래스가 명시적으로 상속을 받고 있지 않으면 자동으로 Object 클래스를 상속 받음
//결론, 모든 클래스는 Object 클래스를 상속받고 있음
//모든 클래스의 객체는 Object로 다 받을 수 있음
public class Tv {
  int num;
  String name;

  public void turnOn(){
    System.out.println("Tv전원 켬");
  }

  @Override
  public String toString() {
    return "Tv{" +
            "num=" + num +
            ", name='" + name + '\'' +
            '}';
  }
}
