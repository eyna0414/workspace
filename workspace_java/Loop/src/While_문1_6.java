public class While_문1_6 {
  public static void main(String[] args) {
//    int num = 1;
//    int th = 0;
//
//    while (num < 101 ){
//      if(num % 3 == 0){
//        th++;
//      }
//      num++;
//    }
//    System.out.println(th);

    int cnt =0;
    for(int i = 1; i < 101; i++){
      if(i % 3 == 0){
        cnt++;
      }
      System.out.println(cnt);
    }


  }
}
