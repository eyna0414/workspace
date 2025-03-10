import java.util.Scanner;

public class 무한루프_2 {
  public static void main(String[] args) {
    //무한루프는 언제 사용?
    //반복 횟수가 정해져 있지 않을 때 사용
    //국어점수(0 ~ 100)를 입력받으세요~

    //0~100점 사이의 점수를 입력할 때 동안 계속 입력 시킨다.
    Scanner sc = new Scanner(System.in);
    int score;

    while (true){
      System.out.print("국어 점수 입력(0 ~ 100) : ");
      score = sc.nextInt();

      //입력받은 정수가 0~100사이라면 반복문을 종료
      if(score >=0 && score <= 100){
        break;
      }

    }

  }
}
