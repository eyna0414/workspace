import java.util.Scanner;

public class IF_문1_6 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int num;

    System.out.print("정수 입력 : ");
    num = sc.nextInt();

    if(num % 5 != 0){
      System.out.println("5의 배수를 입력하세요.");
    }
  }
}
