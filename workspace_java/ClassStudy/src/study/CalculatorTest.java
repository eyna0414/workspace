package study;

import java.util.Scanner;

public class CalculatorTest {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);


    System.out.print("첫 번째 수 : ");
    int num1 = sc.nextInt();

    System.out.print("두 번째 수 : ");
    int num2 = sc.nextInt();

    System.out.print("연산자 : ");
    String operator = sc.next();

    //계산기 객체 생성
    Calculator calculator = new Calculator();
    calculator.setA(num1);
    calculator.setB(num2);

    switch(operator){
      case "+": // 10 + 20 = 30
        System.out.println(num1 + operator + num2 + "=" + calculator.getSum());
        break;
      case "-":
        System.out.println(num1 + operator + num2 + "=" + calculator.getSub());
        break;
      case "*":
        System.out.println(num1 + operator + num2 + "=" + calculator.getMul());
        break;
      case "/":
        System.out.println(num1 + operator + num2 + "=" + calculator.getDiv());
      default:
        System.out.println("연산자를 잘못 입력했습니다.");
    }

    //생성자



  }
}
