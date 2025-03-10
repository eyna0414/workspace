package practice;

import java.util.ArrayList;
import java.util.List;

public class List문1_4 {
  public static void main(String[] args) {

    List<Integer> list = new ArrayList<>();



    for(int i = 0 ; i < 10 ; i++){
      int rand = (int)(Math.random()*100+1);
      list.add(rand);
    }

    //문제의 답이 맞는지 확인하기 위해 리스트의 모든 데이터 출력
    for(int e:list){
      System.out.print(e + " ");
    }

    int even = 0;
    for (int i = 0 ; i <list.size(); i++){
      if(list.get(i) % 2 == 0){
        //모든 짝수 출력
        System.out.print(list.get(i) + " ");
        //even 값을 1 증가시킨다.
        even++;
      }
    }

    System.out.println();
    System.out.println("짝수 개수 : " + even);
    System.out.println("모든 짝수 : " + list);




  }
}
