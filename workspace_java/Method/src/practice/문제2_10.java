package practice;

public class 문제2_10 {
  public static void main(String[] args) {
    boolean a = test10("aaaa");
    System.out.println(a);

  }
  public static boolean test10(String str){
    //삼항연산자
    return str.length() % 2 == 0 ? true : false;

    // = return str.length() % 2 == 0;


//    if(str.length() % 2 == 0){
//      return true;
//    }
//    else {
//      return false;
//    }


  }


}
