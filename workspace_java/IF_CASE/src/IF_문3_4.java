import java.util.Scanner;

public class IF_문3_4 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int num1, num2;
    String s = "+, -, *, /";

    System.out.print("첫 번째 수 : ");
    num1 = sc.nextInt();

    System.out.print("두 번째 수 : ");
    num2 = sc.nextInt();

    System.out.print("연산자 : ");
    s = sc.next();

    switch(s){
      case "+":
        System.out.println(num1 + " + " + num2 + " = " + (num1 + num2));
        break;
      case "-":
        System.out.println(num1 + " - " + num2 + " = " + (num1 - num2));
        break;
      case "*":
        System.out.println(num1 + " * " + num2 + " = " + (num1 * num2));
        break;
      case "/":
        System.out.println(num1 + " / " + num2 + " = " + (num1 / num2));
        break;
      default:
        System.out.println("연산자를 잘못 입력하였습니다.");

    }
  }
}
