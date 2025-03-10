package practice;

import java.util.ArrayList;
import java.util.List;

public class List문1_1 {
  public static void main(String[] args) {
    List<String> list = new ArrayList();

    list.add("a");
    list.add("b");
    list.add("c");

    for(int i = 0 ; i < list.size() ; i++){
      System.out.println(i);
    }


  }



}
