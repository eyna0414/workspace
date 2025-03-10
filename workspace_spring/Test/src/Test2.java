
public class Test2 {
  public static void main(String[] args) {
    //정수 6개 저장할 수 있는 배열
    int[] lotto = new int[6];

    //1~46 사이의 난수 저장
    for(int i = 0 ; i <lotto.length; i++){
      lotto[i] = (int)(Math.random() * 45 + 1);
    }

    //출력
    for(int i = 0 ; i < lotto.length; i++){
      System.out.print(lotto[i]+ " ");
    }
  }
}
