package com.green.First;

public class OrderDTO1 {
  private String food;
  private int cnt;
  private String add;
  private String request;
  private String date;

  public String getFood() {
    return food;
  }

  public void setFood(String food) {
    this.food = food;
  }

  public int getCnt() {
    return cnt;
  }

  public void setCnt(int cnt) {
    this.cnt = cnt;
  }

  public String getAdd() {
    return add;
  }

  public void setAdd(String add) {
    this.add = add;
  }

  public String getRequest() {
    return request;
  }

  public void setRequest(String request) {
    this.request = request;
  }

  public String getDate() {
    return date;
  }

  public void setDate(String date) {
    this.date = date;
  }


  @Override
  public String toString() {
    return "OrderDRO{" +
            "food='" + food + '\'' +
            ", cnt=" + cnt +
            ", add='" + add + '\'' +
            ", request='" + request + '\'' +
            ", date='" + date + '\'' +
            '}';
  }
}
