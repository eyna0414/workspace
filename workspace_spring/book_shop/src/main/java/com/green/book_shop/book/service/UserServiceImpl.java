package com.green.book_shop.book.service;

import com.green.book_shop.book.dto.BookDTO;
import com.green.book_shop.book.dto.UserDTO;
import com.green.book_shop.book.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
  private final UserMapper userMapper;

  //회원가입 기능
  @Override
  public void join(UserDTO userDTO) {
    userMapper.join(userDTO);
  }

  //로그인 기능
//  @Override
//  public void getLogin(UserDTO userDTO) {
//
//  }
}
