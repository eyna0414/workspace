import java.util.Scanner;

public class IF_문1_9 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int num1;
    int num2;
    int min; //num1과 num2 중 작은 수를 저장할 변수
    int max; //num1과 num2 중 큰 수를 저장할 변수


    System.out.print("첫 번째 수 : ");
    num1 = sc.nextInt();

    System.out.print("두 번째 수 : ");
    num2 = sc.nextInt();

//    if (num1 > num2) {
//      System.out.println(num1 + " > " + num2);
//    }
//    else{
//      System.out.println(num2 + " > " + num1);
//    }

    if (num1 > num2){
      min = num2;
      max = num1;
    }
    else {
      min = num1;
      max = num2;
    }

    System.out.println(max + " > " + min);

  }
}
