package study;

//배열의 각 요소의 값을 읽을 때는 for-each문을 사용할 수 있다.
public class ForEach {
  public static void main(String[] args) {
    int[] arr1 = {1, 5, 10};

    //for(반복될 데이터 하나식 저장할 변수:반복 돌릴 데이터)
    for(int e:arr1){ // e = 1
      System.out.print(e + " "); // 1 5 10
    }

    System.out.println();

    String[] arr2 = {"집에", "가고", "싶다"};
    for (String e : arr2){
      System.out.print(e + " ");
    }


  }
}
