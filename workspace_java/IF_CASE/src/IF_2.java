import java.util.Scanner;

public class IF_2 {
  public static void main(String[] args) {
    //키보드로 정수를 한 입력받아,
    //해당 정수가 짝수일때만 '참' 이라는 문자열을 출력하는 코드
    Scanner sc = new Scanner(System.in);

    int box;
    System.out.print("정수 입력 : ");
    box = sc.nextInt();
    if((box % 2) == 0){
      System.out.println("참");
    }

  }
}
