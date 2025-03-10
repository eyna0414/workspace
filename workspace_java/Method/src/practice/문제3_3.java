package practice;

public class 문제3_3 {
  public static void main(String[] args) {
   int result = test3();
    System.out.println(result);

    //= System.out.println(test3());
  }
  public static int test3(){
    //1.0 <= x < 51.0 미만의 실수 리턴
    return (int)(Math.random() * 50 + 1);
  }

}
