package practice;


//1번
//부모클래스의 매개변수 정보가 없는 생성자 호출이 없음
//
//: 자식클래스의 생성자 첫줄에 super() 숨겨져 있음.-> 부모클래스에 없음
//
//6번
//
//        매개변수생성자A30
//생성자B
//
//super() 첫번째줄에 작성되어야 함



//7번
//public class A {
//  private int n;
//  public int getN(){
//    return n;
//  }
//  public void setN(int i){
//    n = i;
//  }
//
//}
////public > defalut > oritected > private
////potecred: private +해당 클래스의 자식클래스는 접근 허용
//
//class B extends A{
//  //A변수에 있는 것 모두 삭제
//
//}
//
//class C extends B{
//  //A,B변수에 있는 것 모두 삭제
//  public double d;
//}




//8번 오류 찾아내어 이유를 설명하고 오류를 수정
//class A{
//  public int i;
//  private int j;
//  public void setJ(int n){
//    j = n;
//  }
//  public int getJ(){
//    return j;
//  }
//}
//
//class B extends A{
//  private int n;
//  public void setN(int i){
//    n = i;
//  }
//  public int getN(){
//    return n;
//  }
//
//  //getJ()로 수정
//  public int getSum(){
//    return n + i + getJ();
//  }
//}


//9번 오류 찾아내서 이유를 설명하고, 오류를 수정
class A{
  private int a;
  public A(int i){
    a = i;
  }
}

class B extends A {
  private int b;
  public B() {
    //super(5); 기입
    super(5);
    b = 0;
  }
}







