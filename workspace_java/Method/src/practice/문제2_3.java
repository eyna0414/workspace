package practice;

public class 문제2_3 {
  public static void main(String[] args) {

    int a = test3(10, 20);
    System.out.println(a);
  }

  public static int test3(int num1, int num2){
    int max = num1 > num2 ? num1 : num2;
    return max;

  }
}
