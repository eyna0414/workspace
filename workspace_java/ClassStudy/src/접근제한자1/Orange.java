package 접근제한자1;

/*
* 접근제한자
* - 멤버 변수, 메서드, 클래스의 사용 범위를 지정
* 종류 : <사용범위> public > default > protected > private
* public 선언된 변수와 메서드 : 같은 프로젝트라면 접근 가능
* default 선언된 변수와 메서드 : 같은 package 내에서 접근 가능
* private 선언된 변수와 메서드 : 변수, 메서드를 선언한 클래스 안에서만 접근가능
*
* 결론
* - 멤버변수에는 무조건 private
* - 메서드에는 무조건 public
* */
public class Orange {
  private int a;
  int b;
  public int c;

  private int price;

  //setter
  public void setPrice(int price){
    this.price = price;
  }
  //gerrer



  private void aaa(){
    a = 10;
  }
  void bbb(){
    aaa();
  }
  public void ccc(){}

}
