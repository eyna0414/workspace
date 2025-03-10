import java.util.Scanner;

public class IF_문1_3 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int a;
    int b;

    System.out.print("a 수 입력 : ");
    a = sc.nextInt();
    System.out.print("b 수 입력 : ");
    b = sc.nextInt();

    if(a > b){
      System.out.println("a가 큽니다.");
    }

    else if(a < b){
      System.out.println("b가 큽니다");
    }

    else {
      System.out.println("같습니다.");
    }
  }
}
