package practice;

import java.util.Scanner;

public class 문제1_8to10 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    //10번 출력
    //test10(5) 메서드의 인자로 5가 전달되었다.
    test10(5);




    //9번 출력
    //System.out.print("첫 번째 정수 : ");
    //int num1 = sc.nextInt();
    //System.out.print("두 번째 정수 : ");
    //int num2 = sc.nextInt();
    //test9(10, 20);


    //8번출력
    //System.out.println("정수 입력 : ");
    //int num = sc.nextInt();
    //test8(num);


  }



  //10. 한 정수를 매개변수로 받아, 그 정수가 짝수이면 ‘짝수입니다’, 홀수이면 ‘홀수입니다’를 출력하는
  //메소드를 선언하고 호출해보세요.
  public static void test10(int num){
    if(num % 2 == 0){
      System.out.println("짝수입니다.");
    }
    else {
      System.out.println("홀수입니다.");
    }
    //삼항연산자
    //조건 ? 참일때 실행 내용 : 거짓일 때 실행 내용;
    //System.out.println( num % 2 == 0 ? "짝수입니다" : "홀수입니다");

  }



  //9. scanner로 정수 두 개를 입력받아, 입력받은 두 수를 매개변수로 사용하여 두 수의 합을 출력하
  //는 메소드를 선언하고, 호출해보세요.
  //public static void test9(int num1 , int num2){
  //  System.out.println(num1 + num2);
  //}

  //8.키보드로 입력받은 정수를 매수변수로 받아, 해당 정수를 출력하는 메소드를 선언, 호출해보세요.
  //public static void test8(int num){
  //  System.out.println(num);
  //}

}
