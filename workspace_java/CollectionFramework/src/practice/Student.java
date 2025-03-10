package practice;

public class Student {
  private String name;
  private int korean;
  private int english;
  private int total;


  public Student() {}

  public Student(String name, int korean, int english) {
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.total = korean+english;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getKorean() {
    return korean;
  }

  public void setKorean(int korean) {
    this.korean = korean;
  }

  public int getEnglish() {
    return english;
  }

  public void setEnglish(int english) {
    this.english = english;
  }

  public int getTotal() {
    return total;
  }

  public void setTotal(int total) {
    this.total = total;
  }

  @Override
  public String toString() {
    return "Student{" +
            "name='" + name + '\'' +
            ", korean=" + korean +
            ", english=" + english +
            ", total=" + total +
            '}';
  }
}
