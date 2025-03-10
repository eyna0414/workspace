package practice;

public class Array_문1_15 {
  public static void main(String[] args) {
    int[] arr1 = {1, 2, 3};
    int[] arr2 = {4, 5, 6};

    //위 두 배열의 모든 요소의 값을 저장할 배열 생성
    int [] newArr = new int[arr1.length + arr2.length];

    //arr1 배열의 모든 요소를 newArr 베열에 저장
    for(int i = 0  ; i < arr1.length; i++){
      newArr[i] = arr1[i];
    }

    //arr2 배열의 모든 요소를 newArr 배열에 저장
    for(int i = 0 ; i < arr2.length ; i++){
      newArr[arr1.length+i] = arr2[i];
    }
    //newArr 출력
    for(int i = 0 ; i < newArr.length ; i++){
      System.out.println(newArr[i] + " ");
    }


  }
}
