
public class MemberTest {
  public static void main(String[] args) {
    //3) main메서드에서의 확인 방법

    //3-a) Member 클래스의 객체 생성
    Member member = new Member();

    //3-a) 회원의 아이디는 “java”, 패스워드는 “1234”, 이름은 “kim”, 나이는 20으로 변경
    member.setInfo("java", "1234", "kim", 20);

    //3-b)생성한 모든 객체의 정보를 출력
    member.showInfo();

    //3-c)isLogin(“java“, “1234“) 메서드 호출 시 결과로 ‘로그인 가능’이 출력되어야 함.
    System.out.println(member.isLogin("java", "1234") ? "로그인 가능" : null);

    //3-d) isLogin(“java“, “1111“) 메서드 호출 시 결과로 ‘로그인 불가능’이 출력되어야 함.
    System.out.println(member.isLogin("java", "1111") ? null : "로그인 불가능");

  }
}
