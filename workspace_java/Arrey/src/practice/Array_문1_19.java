package practice;

import java.util.Arrays;

public class Array_문1_19 {
  public static void main(String[] args) {
    //Math.random()함수를 사용하여 1 ~ 100의 정수를 배열
    //각 요소에 저장
    //배열에 저장된 모든 정수 및 최소값, 최대갑을 출력해보라.
    int[] arr = new int[10];


    //배열의 각 요소에 데이터를 저장
    for (int i = 0; i < arr.length; i++) {
      // 0.0 <= x < 100.0 실수
      arr[i] = (int) (Math.random() * 100 + 1);
    }
    //배열 데어터 확인을 위한 출력

    System.out.println(Arrays.toString(arr));

    int min = arr[0]; //0번째 요소를 가장 작은 값으로 가정
    int max = arr[0]; //0번째 요소를 가장 큰 값으로 가정

    for (int i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
      System.out.println("최소값 : " + min);
      System.out.println("최대값 : " + max);


  }
}
