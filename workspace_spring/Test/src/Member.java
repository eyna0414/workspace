
public class Member {
  //1) Member 클래스는 회원의 아이디, 패스워드, 이름, 나이, 데이터를 갖는다.
  private String id;
  private String pw;
  private String name;
  private int age;

  //2)Member 클래스는 다음과 같은 기능을 갖는다.
  //2-1) void setInfo(String id, String pw, String name, int age)
  // : 매개변수로 전달된 데이터로 모든 멤버변수의 값을 변경하는 기능
  public void setInfo(String id, String pw, String name, int age) {
    this.id = id;
    this.pw = pw;
    this.name = name;
    this.age = age;
  }

  //2-2) void showInfo() : 모든 맴버변수의 값을 출력하는 기능
  public void showInfo() {
    System.out.println("아이디: " + id);
    System.out.println("비밀번호: " + pw);
    System.out.println("이름: " + name);
    System.out.println("나이: " + age);
  }

  //2-3) boolean isLogin(String id, String pw) : 로그인이 가능할 경우에만 true를 리턴
  public boolean isLogin(String id, String pw) {
    return this.id.equals(id) && this.pw.equals(pw);
  }



}
