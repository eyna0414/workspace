public class While_문1_7 {
  public static void main(String[] args) {
//    int num = 1;
//    int fi = 0;
//
//    while (num < 101 ){
//      if(num % 5 == 0){
//        System.out.print(num);
//        fi++;
//      }
//      num++;
//    }
//    System.out.println();
//    System.out.println("5의 배수의 개수 : " +fi);

    int cnt = 0;
    for(int i = 1; i < 101; i++){
      if(i % 5 == 0){
        cnt++;
        System.out.print(i + " ");
      }
      System.out.println();
      System.out.println("5의 배수의 개수 : " + cnt);
    }

  }
}
