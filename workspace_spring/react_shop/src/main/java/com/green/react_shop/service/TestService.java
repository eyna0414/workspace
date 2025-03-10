package com.green.react_shop.service;

import com.green.react_shop.dto.BoardDTO;
import com.green.react_shop.dto.JoinDTO;

import java.util.List;

public interface TestService {
  public List<JoinDTO> getEmpList();

  public List<BoardDTO> joinList();
}
