package practice;

import list_study.Person;

import java.util.ArrayList;
import java.util.List;

public class StudentTest {
  public static void main(String[] args) {
    //Student 클래스의 객체가 다수 저장될 수 있는 리스트 생성
    List<Student> studentList = new ArrayList<>();

    //리스트에 Student  객체 3개 저장
    studentList.add(new Student("kim", 100, 100));
    studentList.add(new Student("lee", 90, 90));
    studentList.add(new Student("park", 80, 80));

//    Student s1 = new Student("kim", 100, 100);
//    Student s2 = new Student("lee", 90, 90);
//    Student s3 = new Student("park", 80, 80);
//
//    studentList.add(s1);
//    studentList.add(s2);
//    studentList.add(s3);

    //1.리스트에 저장된 모든 정보를 출력
    for(int i = 0 ; i < studentList.size() ; i++){
      System.out.println(studentList.get(i));
    }

    System.out.println();
    //2.총점이 150점 이상인 학생의 모든 정보 출력
    for (Student student : studentList) {
      if (student.getTotal() >= 150) {
        System.out.println(student);
      }
    }

    System.out.println();
    //3.모든 학생에 대한 평균 점수 출력
    int total = 0;
    for(int i = 0 ; i < studentList.size() ; i++){
      studentList.get(i).getTotal();
    }
    double average = (double) total/studentList.size();
    System.out.println("학생들의 평균 : " + average);

//    for (Student student : studentList) {
//      total = total + student.getTotal();
//    }
//    double average = (double) total / studentList.size();
//    System.out.println(average);

    System.out.println();
    //4.총점이 1등인 학생의 모든 정보를 출력
    //총점이 가장 높은 학생의 index를 구해야 함.
    int maxIndex = 0;
    for (int i = 0 ; i <studentList.size() ; i++){
      if(studentList.get(i).getTotal() > studentList.get(maxIndex).getTotal()){
        maxIndex = i;
      }
    }
    System.out.println(studentList.get(maxIndex));








  }
}
