public class 변수문제_4 {
  public static void main(String[] args) {
    int a = 10;
    int b = 20;


    System.out.println("a = " + a); //10
    System.out.println("b = " + b); //20

    // a와 b변수의 값을 스위칭
    //1. 변수 c를 만들고 b의 값을 c에 넣는다.
    //2. a의 값을 b에 넣는다.
    //3. c의 값을 a에 넣는다.

    int c = b;
    b = a;
    a = c;

    System.out.println("a = " + a); //20
    System.out.println("b = " + b); //10

  }
}
