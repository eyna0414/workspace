public class 변수_2 {
  public static void main(String[] args) {
    // 변수는 여러개 사용할 수 있음
    int num1;
    num1 = 10;

    int num2;
    num2 = 20;

    //int num2; 변수명은 중복불가

    // num1 변수와 num2 변수에 저장된 정수의 합을 출력
    System.out.println(num1 + num2);
    System.out.println("num1 + num2 = " + num1 + num2); // num1 + num2 = 1020


    System.out.println("num1 + num2 = " + (num1 + num2)); // num1 + num2 = 30

  }
}
