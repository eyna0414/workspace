package com.green.board.service;

import com.green.board.dto.ReplyDTO;

import java.util.List;

public interface ReplyService {
  //게시글 목록 조회 기능
  public List<ReplyDTO> selectBoardReplyList(int boardNum);

  //댓글 작성 기능
  public void insertBoardReply(ReplyDTO replyDTO);

  //게시글 삭제 기능
  public void deleteBoardReply(int replyNum);

}
