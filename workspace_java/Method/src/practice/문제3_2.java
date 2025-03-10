package practice;

public class 문제3_2 {
  public static void main(String[] args) {
  test2(2);

  }
  public static void test2(int num){
    for (int i = 1 ; i < 101 ; i++){
      if(i % num == 0){
        System.out.println(i + " ");
      }

    }

  }

}
