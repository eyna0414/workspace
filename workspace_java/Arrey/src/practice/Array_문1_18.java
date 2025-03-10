package practice;




public class Array_문1_18 {
  public static void main(String[] args) {


    int[] arr = {1, 5, 3, 8, 2};
    // 1. 0번째 요소를 가장 큰 값이라 가정하고 시작!
    // 2. max라는 변수를 반들고, 거기에 0번째 요소를 저장.
    int max = arr[0];

    // 3. 배열의 크기만큼 반복한다.
    // 4. 반복을 하며 배열 요소의 값고 max 변수의 값을 비교
    for(int i = 0; i < arr.length; i++){
      // 5. 만약 max값보다 배열 요소의 값이 크다면 배열 요소의 값을 max변수에 저장한다.
      if(arr[i] > max){
        max = arr[i];
      }
    }

    System.out.println(max);

  }
}
