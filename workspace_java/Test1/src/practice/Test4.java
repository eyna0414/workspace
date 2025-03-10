package practice;

import java.util.Scanner;

public class Test4 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int num;
    int clapCnt = 0;

    System.out.print("1 ~ 999 사이의 정수를 입력하시오>>");
    num = sc.nextInt();


    int ones = num % 10;
    int tens = (num / 10) % 10;
    int huns = num / 100;


    if(ones == 3 || ones == 6 || ones == 9){
      ++clapCnt;
    }

    if(tens == 3 || tens == 6 || tens == 9){
      ++clapCnt;
    }

    if(huns == 3 || huns == 6 || huns == 9){
      ++clapCnt;
    }


    switch (clapCnt){
      case 0:
        System.out.println("박수 0번");
        break;
      case 1:
        System.out.println("박수 1번");
        break;
      case 2:
        System.out.println("박수 2번");
        break;
      case 3:
        System.out.println("박수 3번");

    }
  }
}
