package study;

public class ManTest {
  public static void main(String[] args) {
    Man man1 = new Man();
    man1.setName("홍길동");
    man1.setAge(30);
    man1.setAddress("울산");
    man1.printInfo();

    //이름 데이터 출력
    System.out.println(man1.name);
    System.out.println(man1.getName());


  }
}
