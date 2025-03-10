public class While_문1_3 {
  public static void main(String[] args) {
//    int num = 2;
//    while (num < 11){
      // System.out.println(num);
      // num = num + 2;
      //실행 내용
//      if(num % 2 == 0) {
//        System.out.println(num);
//      }
//      num++;
//    }

    //첫번째방법
    for(int i = 2; i < 11; i = i + 2){
      System.out.println(i);
    }

    System.out.println();

    //두번째방법
    for(int i = 2; i < 11; i++){
      if(i % 2 == 0){
        System.out.println(i);
      }
    }


  }
}
