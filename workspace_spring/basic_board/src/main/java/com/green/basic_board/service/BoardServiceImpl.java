package com.green.basic_board.service;

import com.green.basic_board.dto.BoardDTO;
import com.green.basic_board.mapper.BoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BoardServiceImpl implements BoardService{
  private BoardMapper boardMapper;

  //생성자 주입
  @Autowired
  public BoardServiceImpl(BoardMapper boardMapper){
    this.boardMapper = boardMapper;
  }

  //게시글 목록 조회 기능을 실행하는 메서드
  @Override
  public List<BoardDTO> selectBoardlist() {
    System.out.println("게시글 조회를 시작합니다");
    //게시글 목록 조회 쿼리를 실행
    List<BoardDTO> boardlist = boardMapper.selectBoardlist();
    System.out.println("게시글 조회를 완료했습니다");
    return boardlist;
  }

  //하나의 게시글 정보를 조회하는 기능
  @Override
  public BoardDTO getBoard(int boardNum) {
//    BoardDTO board = boardMapper.getBoard(boardNum);
//    return board;
    //=
    return boardMapper.getBoard(boardNum);
  }

  //게시글 등록 기능
  @Override
  public int insertBoard(BoardDTO boardDTO) {
    return boardMapper.insertBoard(boardDTO);
  }
}
