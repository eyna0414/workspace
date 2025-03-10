import java.util.Scanner;

public class Test1 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int num1, num2, num3;
    int min, mid, max;

    System.out.print("첫 번째 수 : ");
    num1 = sc.nextInt();

    System.out.print("두 번째 수 : ");
    num2 = sc.nextInt();

    System.out.print("세 번째 수 : ");
    num3 = sc.nextInt();

    //num1가 가장 큰 수일 경우
    if(num1 > num2 && num1 > num3){
      max = num1;

      if(num2 > num3){
        mid = num2;
        min = num3;
      }
      else{
        mid = num3;
        min = num2;
      }
    }

    //num2가 가장 큰 수일 경우
    else if(num2 > num1 && num2 > num3){
      max = num2;

      if(num1 > num3){
        mid = num1;
        min = num3;
      }
      else{
        mid = num3;
        min = num1;
      }
    }

    //num3이 가장 큰 수일 경우
    else {
      max = num3;

      if (num1 > num2) {
        mid = num1;
        min = num2;
      } else {
        mid = num2;
        min = num1;
      }
    }

    //출력
    System.out.println(max + " > " + mid + " > " + min);

  }
}
