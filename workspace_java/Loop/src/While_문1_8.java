import java.util.Scanner;

public class While_문1_8 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    int endNum = 1;

    System.out.print("정수 입력 : ");
    endNum = sc.nextInt();


    //반복 시작 숫자
    int i = 1;

    //짝수의 개수를 저장할 변수
    int cnt = 0;

    //1부터 endNum까지 반복
    while (i <= endNum){    //= (i < endNum+1)
      //숫자가 짝수라면..
      if(i % 2 == 0){
        cnt++;
      }
      i++; //반복을 한 번 할때마다 i를 1 증가 시키다.
    }
    System.out.println(cnt);



  }
}
