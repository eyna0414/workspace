package practice;

public class 문제3_6 {
  public static void main(String[] args) {
    int[] arr = {1, 10, 100, 5, 2};
    int maxDate = test6(arr);
    System.out.println(maxDate);

  }

  public static int test6(int[] arr) {
    int max = arr[0];

    for (int i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }




}