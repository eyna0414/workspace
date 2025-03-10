package com.green.basic_board.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.apache.tomcat.util.codec.binary.StringUtils;

import java.sql.Timestamp;

@Getter
@Setter
@ToString
//DTO : data transfer object 데이터 전송 객체
public class BoardDTO {
  private int boardNum;
  private String title;
  private String writer;
  private String content;
  private int readCnt;
  private Timestamp createDate;

}
