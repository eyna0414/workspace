package 결합도응집도0131;

public class Restaurant {
  private String addr;
  private Cookable chef = new Chef();

  public void takeOrder(){
    chef.cook();
  }
}


