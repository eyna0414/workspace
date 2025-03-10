
package com.green.board.controller;

import com.green.board.dto.BoardDTO;
import com.green.board.dto.ReplyDTO;
import com.green.board.dto.TestDTO;
import com.green.board.service.ReplyService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/replies")
public class ReplyController {
  private ReplyService replyService;

  public ReplyController(ReplyService replyService){
    this.replyService = replyService;
  }

  //댓글 목록 조회 rest api
  @GetMapping("/{boardNum}")
  public List<ReplyDTO> getBoardReplyList(@PathVariable("boardNum") int boardNum) {
    return replyService.selectBoardReplyList(boardNum);
  }

  //댓글 작성 rest api
  @PostMapping("")
  public void regBoardReply(@RequestBody ReplyDTO replyDTO){
    replyService.insertBoardReply(replyDTO);
  }

  //댓글 삭제 rest api
  @DeleteMapping("/{replyNum}")
  public void deleteBoardReply(@PathVariable("replyNum") int replyNum){
    replyService.deleteBoardReply(replyNum);
  }

//
//  @GetMapping("/test")
//  public void test(@RequestParam("age")int age, @RequestParam("name") String name){
//    System.out.println("age = " + age);
//    System.out.println("name = " + name);
//  }

  //DTO로 받는 방법
  @GetMapping("/test")
  public void test(TestDTO testDTO){
    System.out.println(testDTO);
  }

}
