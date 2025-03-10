package practice;

public class 문제1_11 {
  public static void main(String[] args) {
    test11(11, 10);

  }

  public static void test11(int num1, int num2){
    if (num1 % 2 == 0 && num2 % 2 == 0) {
      System.out.println("두 수는 짝수입니다.");
    }
    else if (num1 % 2 != 0 && num2 % 2 != 0) {
      System.out.println("두 수는 홀수입니다.");
    }
    else {
      System.out.println("한 수만 짝수입니다.");
    }

  }

}
