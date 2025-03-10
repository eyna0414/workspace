import java.util.Scanner;

public class Test5 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    //1) 크기가 3인 정수형 배열 생성
    int[] arr = new int[3];
    int[] user = new int[3];
    int strike = 0;
    int ball = 0;

    //  배열의 각 요소에 1 ~ 9 사이의 랜덤한 정수 저장
    for(int i = 0 ; i <arr.length; i++){
      arr[i] = (int)(Math.random() * 9 + 1);
      for (int j = 0; j < i; j++) {
        if(arr[i] == arr[j]){
          i--;
          break;
        }
      }
    }
    //임시출력
    for(int i = 0 ; i < arr.length; i++){
      System.out.print("만들어진 숫자 : " + arr[i] + " ");
    }

    // 2) 3스트라이크가 될 때까지 게임을 계속 진행


//    while (true){
//      for(int i = 0; i<user.length ; i++){
//        System.out.print();
//
//      }
    }



    // 결과 출력
//    System.out.println(strike + "스트라이크 " + ball + "볼");



//  }
}
