package practice;

import java.nio.channels.NonWritableChannelException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class List문1_2 {
  public static void main(String[] args) {
    List<Integer> list = new ArrayList<>();


    Scanner sc = new Scanner(System.in);

    //키보드로 정수를 입력받아. 리스트에 저장

    for (int i = 0; i < 5; i++){
      System.out.println(i + 1 + "번째 정수 입력 :");
      int a = sc.nextInt();
      list.add(a);
    }

    int sum = 0;
    for(int i = 0 ; i < list.size() ; i++){
      sum = sum + list.get(i);
    }





  }
}
