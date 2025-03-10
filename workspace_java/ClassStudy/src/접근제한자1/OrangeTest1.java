package 접근제한자1;

public class OrangeTest1 {
  public static void main(String[] args) {
    Orange orange = new Orange();
    //orange.a; a변수는 private라서 다른 클래스
    //orange.aaa();
    orange.b = 10;
    orange.c = 20;

    //orange.price = 100;
    orange.setPrice(100);
  }
}
