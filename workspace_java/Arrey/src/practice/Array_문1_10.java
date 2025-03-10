package practice;

public class Array_문1_10 {
  public static void main(String[] args) {

    int[] arr = {1, 2, 3, 4, 5, 6, 7, 8};
    int even = 0;

    //for-each문 사용
    for(int e : arr){
      if(e % 2 == 0){
        even++;
      }
    }


    System.out.println();

    //기본 for문 사용

    for(int i = 0; i < arr.length; i++){
      if(arr[i] % 2 ==0){
       even++;
      }
    }
    System.out.println(even);






  }
}
