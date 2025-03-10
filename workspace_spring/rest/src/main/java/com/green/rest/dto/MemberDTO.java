package com.green.rest.dto;


//DTO(Data transfer Object : 데이터 전송 객체)
public class MemberDTO {

  private String memId;
  private String memName;
  private int memAge;
  private String memTel;

  @Override
  public String toString() {
    return "MemberDTO{" +
            "memId='" + memId + '\'' +
            ", memName='" + memName + '\'' +
            ", memAge=" + memAge +
            ", memTel='" + memTel + '\'' +
            '}';
  }

  public String getMemId() {
    return memId;
  }

  public void setMemId(String memId) {
    this.memId = memId;
  }

  public String getMemName() {
    return memName;
  }

  public void setMemName(String memName) {
    this.memName = memName;
  }

  public int getMemAge() {
    return memAge;
  }

  public void setMemAge(int memAge) {
    this.memAge = memAge;
  }

  public String getMemTel() {
    return memTel;
  }

  public void setMemTel(String memTel) {
    this.memTel = memTel;
  }
}
