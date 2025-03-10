package practice;

import java.util.Scanner;

public class Array_문1_9 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int[] arr = new int[5];

//    System.out.print("정수 5개 입력 : ");
    for (int i = 0; i < arr.length; i++) {
      System.out.println(i + "번째 요소의 값 :");
      arr[i] = sc.nextInt();
    }
    //입력 받은 값 확인
    for(int i = 0; i < arr.length; i++){
      System.out.println(arr[i]);
    }

  }
}
