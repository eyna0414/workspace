package practice;

import java.util.Scanner;

public class StudentManager {
  private Scanner sc;
  private Student[] students;
  private int index; // students 배열의 요소를 지정

  public StudentManager(){
    sc = new Scanner(System.in);
    Student[] students = new Student[3];
    index = 0;
  }
  //Scanner sc = new Scanner(System.in);

  //학생 등록 기능
  public void regStudent(){
    System.out.println("학생 등록을 시작합니다. 학생 정보를 입력하세요.");
    System.out.print("이름 : ");
    String name = sc.next();
    System.out.print("나이 :");
    int age = sc.nextInt();
    System.out.print("연락처 :");
    String tel = sc.next();
    System.out.print("학점 :");
    String grade = sc.next();

    //입력받은 정보로 학생을 생성한다.
    Student stu = new Student(name, age, grade, tel);

    //생성한 학생을 students 배열에 저장한다.
    students[index++] = stu;
  }

  //학생 정보 변경(연락처)
  public void setTelInfo(){
    System.out.println("학생의 연락처 정보를 변경하는 기능 실행");
  }

  //학생 정보 출력(한명)
  public void printStuInfo(){
    System.out.println("학생 한 명의 정보를 출력하는 기능 실행");
  }


  //모든 학생 정보 출력
  public void printStuInfoAll(){
    System.out.println("모든 학생의 정보입니다. 현재 총 학생 수는 "+ index +"명입니다");
    for(int i = 0 ; i < index ; i++){
      students[i].printStudent();
      System.out.println();
    }
  }


}
