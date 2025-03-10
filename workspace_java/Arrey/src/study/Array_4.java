package study;

//배열이 자료형이라는 의미
public class Array_4 {
  public static void main(String[] args) {
    int[] arr1 = {1, 2, 3};
    int a = 5;

    //a = arr1; 자료형 불일치!
    //a == arr1[1];

    String[] arr2 = {"java", "hpuse"};
    int[] arr3 = {1, 5};
    //arr3 = arr2;
    //String abc = arr2;

    int[] arr4 = {5, 10};
    //arr4가 arr3와 같은 값을 가짐
    arr4 = arr3; //arr4={1, 5};

    //arr4 = sc.nextInt();
    //arr4[2] = sc.nextInt();



  }
}
