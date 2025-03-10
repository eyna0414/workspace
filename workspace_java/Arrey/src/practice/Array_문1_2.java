package practice;

public class Array_문1_2 {
  public static void main(String[] args) {

    //2. 배열을 생성하는 방법으로 틀린 것은?
    //2번
    //4번 이차원 배열

    //3. 다음 소스에서 잘못된 부분은?
    //int[10] arr; 선언은 배열의 크기 X

    //4. 다음 소스에서 잘못된 부분은?
    //2번 arr[arr.length] = 0; > arr에 5번째 공간X

    //5. 정수를 10개 저장할 수 있는 배열을 생성하고 모든 요소의 값을 출력해보아라.
    int[] arr1 = new int[10];
    for(int i = 0 ; i < 10 ; i++){
      System.out.print(arr1[i]);
    }

    System.out.println();

    //6.
    int[] arr2 = new int[10];
    //모든 요소에 저장하기
    for(int i = 0 ; i < arr2.length ; i++){
      arr2[i] = 3;
    }
    //모든 요소 출력
    for(int i = 0 ; i < arr2.length ; i++){
    System.out.print(arr2[i] + " ");}

    /// ///////////////////////////////
    System.out.println();


    //7.
    int[] arr3 = new int[10];
    for (int i = 0 ; i < arr3.length; i++){
      arr3[i] = i + 1;
    }

    for (int i = 0 ; i < arr3.length; i++){
      System.out.print(arr3[i] + " ");
    }

    /// ////////////////////////////////

    System.out.println();
    //8.
    int[] arr4 = {1, 5, 7};

    int sum = 0;
    for(int i = 0 ; i < arr4.length; i++){
      sum = sum + arr4[i];
    }
    System.out.println(sum);








  }
}
