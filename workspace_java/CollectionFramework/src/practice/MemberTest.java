package practice;

import java.util.ArrayList;
import java.util.List;

public class MemberTest {
  public static void main(String[] args) {
    List<Member> memberList = new ArrayList<>();

    Member m1 = new Member("java", "pw1","kim", 10);
    Member m2 = new Member("java2", "pw2","lee", 20);
    Member m3 = new Member("java3", "pw3","park", 30);

    memberList.add(m1);
    memberList.add(m2);
    memberList.add(m3);

    for(int i = 0 ; i < memberList.size() ; i++){
      System.out.println(memberList.get(i));
    }

    /// ///////////////////////////////////////
    int sumAge = 0;
    for(Member member : memberList){
      sumAge = sumAge + member.getAge();
    }
    System.out.println("나이의 합 : " + sumAge);

    /// ///////////////////////////////////////////
    //List.remove(Member.getId().equals("java"));

    for(int i = 0 ; i < memberList.size(); i++){
      if(memberList.get(i).getId().equals("java")){
        memberList.remove(i);
        break;
      }
    }



  }
}
