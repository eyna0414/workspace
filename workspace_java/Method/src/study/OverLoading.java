package study;

public class OverLoading {
  public static void main(String[] args) {
    System.out.println(true);

    //메서드 오버로딩
    //메소드명은 중복 불가한다.
    //하지만 메서드의 매개변수 정보(매개변수의 갯수, 매개변소의 자료형)가 다르면
    //중복된 이름으로 메서드명 작성 허용


    //println(5);
  }


  //문자열을 출력하는 메서드
  public static void println(String str){
    System.out.println(str);
  }
  //정수를 출력하는 메서드
  public static void println(int str){
    System.out.println(str);
  }

  //정수를 출력하는 메서드
  public static void println(int num, int num1){
    System.out.println(num);
  }

}
