public class While_문1_12 {
  public static void main(String[] args) {
//    int i = 1;
//    int sum = 0;

//    while (true){
//      sum = sum+i;
//      if(sum > 300){
//        break;
//      }
//      i++;
//    }
//    System.out.println(sum);
//    System.out.println(i);

    int sum = 0;
    //변수는 이름이 중복 불가
    //변수는 해당 변수가 선언된 중괄호 안에서만 사용 가능!
    int i = 1;
    for(i = 1; i < 100; i++){
      sum = sum + i;
      if(sum > 300) {
        break;
      }
    }
    System.out.println("합 : " + sum);
    System.out.println("마지막에 더해진 값 : " + i);



  }
}
