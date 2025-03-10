package practice;

public class 문제1_12to15 {
  public static void main(String[] args) {
  //15번출력
    test15("str", 5);


  //14번출력
  //  test14(1,17);

  //13번출력
  //  test13(1,5);

    //int a = 5;
    //int b = 15;
    //변수
    //test13(a, b);

    //int num1 = a;


  //12번출력
  //  test12(10);

  }

  //15. 한 문자열과 정수를 매개변수로 받아, 매개변수로 받은 문자열을 매개변수로 받은 숫자만큼 반
  //복 출력하는 메소드를 선언하고 호출해보세요.
  public static void test15(String str, int num) {
    for (int i = 0 ; i < num; i++) {
      System.out.print(str);
    }
  }




  //14.두 정수를 매개변수로 받아, 두 정수 사이의 5의 배수의 개수를 출력하는 메소드를 선언하고 호
  //출해보세요.

//  public static void test14(int num1, int num2){
//    int cnt = 0;
//    int min = num1 > num2 ? num2 : num1;
//    int max = num1 > num2 ? num1 : num2;
//    for(int i = min+1 ; i < max ; i++){
//      if(i % 5 == 0){
//        cnt++;
//      }
//    }
//    System.out.println(cnt);
//  }




  //13. 두 정수를 매개변수로 받아, 두 정수 사이의 숫자를 출력하는 메소드를 선언 및 호출해보세요.

//  public static void test13(int num1, int num2){
//    int min = num1 > num2 ? num2 : num1;
//    int max = num1 > num2 ? num1 : num2;
//    for(int i = min+1; i < max; i++){
//      System.out.println(i + " ");
//
//    }
//  }



  //12. 한 정수를 매개변수로 받아, 0부터 입력받은 숫자까지 출력하는 메소드를 선언 및 호출해보세요.
//  public static void test12(int num){
//    for(int i = 0; i < num + 1; i++ ){
//      System.out.println(i + " ");
//    }
//  }

}
