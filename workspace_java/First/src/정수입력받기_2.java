import java.util.Scanner;

public class 정수입력받기_2 {
  public static void main(String[] args) {
    //두 정수를 키보드로 입력받아,
    //입력받은 두 수의 합을 출력
    Scanner sc = new Scanner(System.in);

    System.out.println("정수 입력 : ");
    int num1 = sc.nextInt();
    System.out.println("정수 입력 : ");
    int num2 = sc.nextInt();

    System.out.println("두 수의 합 = " + (num1 + num2));



  }
}
