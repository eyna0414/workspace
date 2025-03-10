package com.green.board.service;

import com.green.board.dto.BoardDTO;
import com.green.board.dto.SearchDTO;
import com.green.board.mapper.BoardMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService{
  private BoardMapper boardMapper;

  public BoardServiceImpl(BoardMapper boardMapper){
    this.boardMapper = boardMapper;
  }

  //게시글 목록 조회 기능
  @Override
  public List<BoardDTO> selectBoardList(SearchDTO searchDTO) {
    return boardMapper.selectBoardList(searchDTO);
  }

  //게시글 상세 정보 기능 + 조회수 증가
  @Override
  public BoardDTO selectBoardDetail(int boardNum) {
    //조회수 증가 쿼리 실행
    boardMapper.updateBoardCnt(boardNum);
    //상세 정보 조회 쿼리
    return boardMapper.selectBoardDetail(boardNum);
  }

  //게시글 작성 기능
  @Override
  public int insertBoard(BoardDTO boardDTO) {
    return boardMapper.insertBoard(boardDTO);
  }

  //게시글 삭제 기능
  @Override
  public void deleteBoard(int boardNum) {
    boardMapper.deleteBoard(boardNum);
  }

  //게시글 수정 기능
  @Override
  public void updateBoard(BoardDTO boardDTO) {
    boardMapper.updateBoard(boardDTO);
  }


}
