package practice;

import java.util.Scanner;

public class 문제2_2 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("첫 번째 정수 : ");
    int num1 = sc.nextInt();
    System.out.print("두 번째 정수 : ");
    int num2 = sc.nextInt();
    int a = test2(10, 20);
    System.out.println(a);


  }
  public static int test2(int num1, int num2){
    return num1 * num2;

  }


}
