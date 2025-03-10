package com.green.book_shop.book.controller;


import com.green.book_shop.book.dto.BookDTO;
import com.green.book_shop.book.dto.UserDTO;
import com.green.book_shop.book.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {
  private final UserService userService;

  // 회원가입 api
  @PostMapping("")
  public void join(@RequestBody UserDTO userDTO) {
    userService.join(userDTO);
  }

}
