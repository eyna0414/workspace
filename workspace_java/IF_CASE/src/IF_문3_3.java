import java.util.Scanner;

public class IF_문3_3 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int num1, num2; //두 정수를 저장할 변수
    String s = "+, -, *, /"; //연산자를 저장할 변수

    //정보 입력
    System.out.print("첫 번째 수 : ");
    num1 = sc.nextInt();

    System.out.print("두 번째 수 : ");
    num2 = sc.nextInt();

    System.out.print("연산자 : ");
    s = sc.next();

    if(s.equals("+")){
      System.out.println(num1 + " + " + num2 + " = " + (num1 + num2));
    }
    else if(s.equals("-")){
      System.out.println(num1 + " - " + num2 + " = " + (num1 - num2));
    }
    else if(s.equals("*")){
      System.out.println(num1 + " * " + num2 + " = " + (num1 * num2));
    }
    else if(s.equals("/")){
      System.out.println(num1 + " / " + num2 + " = " + (num1 % (double)num2));
    }
    else{
      System.out.println("연산자를 잘못 입력하였습니다.");
    }



  }
}
