package practice;

public class 문제2_6 {
  public static void main(String[] args) {

    String a = test6(20);
    System.out.println(a);

  }

  public static String test6(int num){
    //숫자 -> 문자열
    String a = String.valueOf(10);

    //문자열 -> 정수
    int b = Integer.parseInt("10");

    return String.valueOf(num);
    //return num + " " ;
  }

}
