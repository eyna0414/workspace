package com.green.security_exam.service;

import com.green.security_exam.dto.MemberDTO;
import com.green.security_exam.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


public interface UserService {

  public void join(MemberDTO memberDTO);

  public MemberDTO getMemberForLogin(String memEmail);
}
