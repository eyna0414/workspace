package com.green.book_shop.book.mapper;

import com.green.book_shop.book.dto.UserDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

  // 회원가입 쿼리
  public void join(UserDTO userDTO);

  // 회원가입 중복 확인 쿼리
  public void isUsableLogin(UserDTO userDTO);

  //로그인 쿼리
  public void getLogin(UserDTO userDTO);
}
