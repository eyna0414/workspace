package practice;

public class MemberService {
  private String id;
  private String password;

  public boolean login(String id, String password){
    if(id.equals("hong") && password.equals("12345")){
      return true;
    }
    else {
      return false;
    }

    //삼항연산자
    //return id.equals("hong) && password.equals("12345") ? true : false;
  }

  public void logout(String id){
    System.out.println("로그아웃 되었습니다.");
  }

}
