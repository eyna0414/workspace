package practice;

public class Member {
  private String name;
  private String id;
  private String password;

  public Member(){
    name = "자바";
    id = "java";
    password = "123";
  }

  public Member(String name, String id, String password){
    this.name = name;
    this.id = id;
    this.password = password;
  }

  public void setName(){
    this.name = name;
  }

  public void setId(){
    this.id = id;
  }

  public void setPassword(){
    this.password = password;
  }

  public String getName(){
    return name;
  }

  public String getId(){
    return id;
  }

  public String getPassword(){
    return password;
  }

  public void displatInfo(){
    System.out.println("이름 : " + name);
    System.out.println("아이디 : " + id);
    System.out.println("패스워드 : " + password);
  }




}
