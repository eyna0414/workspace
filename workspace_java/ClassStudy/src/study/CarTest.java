package study;

//Car 클래스의 내용을 실행하기 위한 클래스
public class CarTest {
  public static void main(String[] args) {
    //Car 클래스를 활용하여 Car 객체 생성!
    //객체 생성 문법
    // - 클래스명 객체면 = new 클래스명();
    // * 객체명 == 인스턴스(instance) == 참조변수명
    //new -> 새로운 인스턴스(객체)를 생성해주세요~

    //car1이라는 인스턴스를 생성
    Car car1 = new Car();

    //car1 인스턴스의 데어터 접근 방법
    //객체명.변수명;
    System.out.println(car1.carName);
    System.out.println(car1.price);

  }
}
