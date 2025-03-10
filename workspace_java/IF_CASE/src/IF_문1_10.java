//시험문제출제

import java.util.Scanner;

public class IF_문1_10 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int num1, num2, num3;
    int min, mid, max;


    //키보드로 숫자 입력
    System.out.print("첫 번째 수 : ");
    num1 = sc.nextInt();

    System.out.print("두 번째 수 : ");
    num2 = sc.nextInt();

    System.out.print("세 번째 수 : ");
    num3 = sc.nextInt();


    //숫자 크기 비교
    //num1이 가장 클 경우
    if(num1 > num2 && num1 > num3){
      max = num1;

      //num2가 num3보다 클 경우
      if(num2 > num3){
        mid = num2;
        min = num3;
      }
      else{
        mid = num3;
        min = num2;
      }
      //그렇지 않은 경우
    }

    //그렇지 않고 num2가 가장 클 경우
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

    //num3가 가장 클 경우
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

//if(x >= x1 && x <= x2 && y >= y1 && y <= y2){
//
//        }
