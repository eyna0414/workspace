package com.green.board.service;

import com.green.board.dto.BoardDTO;
import com.green.board.dto.SearchDTO;

import java.util.List;

public interface BoardService {

  //게시글 목록 조회 기능
  public List<BoardDTO> selectBoardList(SearchDTO searchDTO);

  //게시글 상세 정보 기능
  public BoardDTO selectBoardDetail(int boardNum);

  //게시글 작성 기능
  public int insertBoard(BoardDTO boardDTO);

  //게시글 삭제 기능
  public void deleteBoard(int boardNum);

  //게시글 수정 기능
  public void updateBoard(BoardDTO boardDTO);



}
