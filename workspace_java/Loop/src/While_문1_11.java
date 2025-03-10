import java.util.Scanner;

public class While_문1_11 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num1, num2;

    System.out.print("첫 번째 정수 : ");
    num1 = sc.nextInt();

    System.out.print("두 번째 정수 : ");
    num2 = sc.nextInt();

//    int min;
//    int max;
//    int sum = 0;
//
//    if(num1 > num2){
//      min = num2+1;
//      max = num1;
//    }
//    else {
//      min = num1+1;
//      max = num2;
//    }
//
//    while (min < max){
//      sum = sum + min;
//      min++;
//    }
//    System.out.println(sum);

    //

    //두 수 중 큰 수와 작은 수를 구분
    //삼항연산자
    int min = num1 > num2 ? num2 : num1;
    int max = num1 > num2 ? num1 : num2;


    int i = min +1;
    int sum = 0;

    while (i < max){
      sum = sum + i;
      i++;
    }

    System.out.println(sum);

  }
}
