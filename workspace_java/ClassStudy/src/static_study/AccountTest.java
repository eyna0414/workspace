package static_study;

public class AccountTest {
  public static void main(String[] args) {
    Account a1 = new Account("김자바");
    Account a2 = new Account("박자바");
    Account a3 = new Account("최자바");
    Account.iyul = 10.0;
    System.out.println(a1.iyul);

    /// //////////////////////////
    System.out.println("java");
  }
}

//컬렉션 프레임워크(Collection Framework)
//Collection: 데이터모음집
//Framework: 반제품, 기능 모음집
//->다수의 만들어 놓은 문법
