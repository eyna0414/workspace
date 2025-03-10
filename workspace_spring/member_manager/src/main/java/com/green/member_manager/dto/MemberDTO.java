package com.green.member_manager.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Timestamp;
@Setter
@Getter
@ToString
public class MemberDTO {
  private String memId;
  private String memName;
  private String memPw;
  private String memTel;
  private String memIntro;
  private Timestamp joinDate;
}
