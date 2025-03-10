package com.green.react_shop.mapper;

import com.green.react_shop.dto.BoardDTO;
import com.green.react_shop.dto.JoinDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TestMapper {
  public List<JoinDTO> getEmpList();

  public List<BoardDTO> getBoardList();

  public BoardDTO getBoard(int boardNum);

  public List<BoardDTO> joinList();

}
