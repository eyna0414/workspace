package practice;

public class Array_문1_14 {
  public static void main(String[] args) {
    int[] arr = {5, 4, 3, 2, 1};
    int[] newArr = new int[arr.length];

    for(int i = 0 ; i < arr.length; i++){
      newArr[i] = arr[i];
    }

    for(int i = 0 ; i < newArr.length ; i++){
      System.out.print(newArr[i] + " ");
    }

  }
}
