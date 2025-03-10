package practice;

public class 문제3_7 {
  public static void main(String[] args) {
    String[] a = {"aaa", "bbb"};
    String c = test7(a);
    System.out.println(c);

  }
  public static String test7(String[] arr){
    String result = "";
    for (int i = 0 ; i < arr.length ; i++){
      result = result + arr[i];
    }
    return result;
  }




}
