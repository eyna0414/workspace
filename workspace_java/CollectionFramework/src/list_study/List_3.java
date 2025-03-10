package list_study;

import java.awt.*;
import java.util.ArrayList;
import java.util.List;

public class List_3 {
  public static void main(String[] args) {
    //문자열을 다수 저장할 수 있는 list 객체 생성
    List<String> list = new ArrayList<>();

    list.add("java");
    list.add("c++");
    list.add("python");

    for(int i = 0 ; i < list.size() ; i++){
      System.out.println(list.get(i));
    }

    //for-each
    for(String e : list){
      System.out.println(e);
    }

    list.remove(1);
    System.out.println();


  }
}
