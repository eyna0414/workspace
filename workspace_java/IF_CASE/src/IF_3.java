import java.util.Scanner;

public class IF_3 {
  public static void main(String[] args) {
    //키보드로 정수 두 개를 입력받아,
    //입력 받은 두 수의 합이 10 이상이면서
    //짝수는 아닐 경우에만 "참"이라는 문자열을 출력

    Scanner sc = new Scanner(System.in);

    int num1;
    int num2;
    System.out.print("첫번째수: ");
    num1 = sc.nextInt();
    System.out.println("두번째수 : ");
    num2 = sc.nextInt();

    //결과출력
    if ((num1 + num2) >= 10 && (num1 + num2) % 2 != 0) {
      System.out.println("참");

    }
  }
}
