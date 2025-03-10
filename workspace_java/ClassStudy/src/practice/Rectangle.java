package practice;

public class Rectangle {
  private int x1, y1, x2, y2;



  // x1, y1, x2, y2 좌표 변경
  public void set(int x1, int y1, int x2, int y2){
    this.x1=x1;
    this.y1=y1;
    this.x2=x2;
    this.y2=y2;
  }

  //default 생성자
  public Rectangle(){}

  //x1, y1, x2, y2 값을 설정하는 생성자
  //자동생성 - Generate-constructor

  public Rectangle(int x1, int y1, int x2, int y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }


  //사각형의 넓이 리턴
  public int Square(){
    return (x2-x1) * (y2-y1);
  }

  //좌표의 넓이 등 직사각형 정보의 화면 출력
  //ex> 좌표 : (1,3), (2,5), 넓이 : 2
  public void show(){
    System.out.println("좌표 : (" + x1 + ", " + y1 + "), (" + x2 + ", " + y2 + ") , 넓이 : " + Square());
  }
  //인자로 전달된 객체 r과 현 객체가 동일한 직사각형이면 true 리턴
  public boolean equals(Rectangle r){
    if(Square() == r.Square()){
      return true;
    }
    else {
      return false;
    }
  }








}
