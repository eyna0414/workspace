package study;

//print 인터페이스를 구현하여 SamsungPrinter클래스를 만든다
public class SamsungPrinter implements Print{
  @Override
  public void print() {
    System.out.println("흑백 출력 실행");
  }

  @Override
  public void colorPrint() {
    System.out.println("컬러 출력 실행");
  }
}
