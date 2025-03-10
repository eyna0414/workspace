package com.green.board.controller;

import com.green.board.dto.BoardDTO;
import com.green.board.dto.SearchDTO;
import com.green.board.mapper.BoardMapper;
import com.green.board.service.BoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/boards")
public class BoardController {
  private BoardService boardService;

  public BoardController(BoardService boardService){
    this.boardService = boardService;
  }

  //게시글 목록 조회 rest api
  @GetMapping("")
  public List<BoardDTO> getBoardList(SearchDTO searchDTO){
    System.out.println(searchDTO);
    return boardService.selectBoardList(searchDTO);
  }

  //게시글 상세 정보 rest api
  @GetMapping("/{boardNum}")
  public BoardDTO getBoardDetail(@PathVariable("boardNum") int boardNum){
    return boardService.selectBoardDetail(boardNum);
  }

  //게시글 작성 rest api
  @PostMapping("")
  public int regBoard(@RequestBody BoardDTO boardDTO){
    return boardService.insertBoard(boardDTO);
  }

  //게시글 삭제 rest aoi
  @DeleteMapping("/{boardNum}")
  public void deleteBoard(@PathVariable("boardNum") int boardNum){
    boardService.deleteBoard(boardNum);
  }

  //게시글 수정 rest api
  @PutMapping("/{boardNum}")
  public void updateBoard(@PathVariable("boardNum") int boardNum, @RequestBody BoardDTO boardDTO){
    boardDTO.setBoardNum(boardNum);
    boardService.updateBoard(boardDTO);
  }




}
