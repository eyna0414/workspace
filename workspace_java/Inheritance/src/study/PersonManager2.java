package study;

public class PersonManager2 {
  public static void main(String[] args) {

    //친구객체 10개 저장할 수 잇는 배열 생성
    Friend[] fs = new Friend[10];
    int cnt = 0;

    fs[cnt++] = new UnivFriend("김자바", "010-1111", "생물학과");
    fs[cnt++] = new CompFriend("김자바", "010-1111", "회계부");

    for(int i = 0 ; i < cnt ; i++){
      fs[i].showInfo();
    }

  }
}
