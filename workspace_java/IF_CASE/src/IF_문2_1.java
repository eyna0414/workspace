import java.util.Scanner;

public class IF_문2_1 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int num1, num2, num3;

    System.out.print("변의 길이 입력 : ");
    num1 = sc.nextInt();

    System.out.print("변의 길이 입력 : ");
    num2 = sc.nextInt();

    System.out.print("변의 길이 입력 : ");
    num3 = sc.nextInt();

    if(num1 + num2 > num3){
      System.out.println();
    }
    else if(num1 + num3 > num2){
      System.out.println();
    }
    else{

    }
    System.out.println();


  }
}
