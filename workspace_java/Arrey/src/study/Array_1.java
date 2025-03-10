package study;

//배열의 선언과 생성 방법
public class Array_1 {
  public static void main(String[] args) {
    //배열의 기본 형태
    //변수를 저장할 공간 5개를 생성
    int[] a = new int[5];
    /// //////////////////////////////////

    //배열 사용을 위한 조건
    //1. 배열을 선언
    //   -자료형[] 변수형(참조변수);
    //   ex> int[] aaa;
    //   ex> double[] bbb;
    //2. 배열을 생선한다(변수에서는 초기화라고 부름)
    //   -참조변수명 = new 자료형[공간의 크기];
    //   공간의 크기는 배열 생성 시 결정하며, 한 번 크기가 정해지면 수정불가!
    //   ex> aaa = new int[3];
    //   ex> bbb = bbb double[5];

    //정수를 다수 저장할 수 있는 배열 arr1 선언
    int[] arr1;
    //arr1 배열을 정수가 5개 저장될 수 있도록 생성!
    arr1 = new int[5];

    //문자열을 다수 저장할 수 있는 배열 arr2 선언
    String[] arr2;
    //arr2 배열을 문자열이 4개 저장될 수 있도록 생성!
    arr2 = new String[4];

    //배열의 선언 및 생성르 동시 진행
    //실수를 5개 저장할 수 있는 배열 arr3를 생성!
    double[] arr3 = new double[5];


  }
}
