package practice;

public class 문제2_5 {
  public static void main(String[] args) {
    String a = test5(60);
    System.out.println(a);

  }

  public static String test5(int score){
    if(score >= 90){
      return "A";
    }
    else if(score >= 70){
      return "B";
    }
    else {
      return "C";
    }

  }

}
