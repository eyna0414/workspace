package practice;

public class 문제2_9 {
  public static void main(String[] args) {
  int a = test9(5);
    System.out.println(a);

  }

  public static int test9(int num){
    int sum = 0;
    for(int i = 1 ; i < num + 1 ; i++){
      if (i % 2 != 0){
        sum = sum + i;
      }
    }
    return sum;
  }

}
