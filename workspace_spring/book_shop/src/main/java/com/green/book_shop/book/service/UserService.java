package com.green.book_shop.book.service;

import com.green.book_shop.book.dto.UserDTO;

public interface UserService {

  // 회원가입 기능
  public void join(UserDTO userDTO);

  //로그인 기능
//  public void getLogin(UserDTO userDTO);
}
