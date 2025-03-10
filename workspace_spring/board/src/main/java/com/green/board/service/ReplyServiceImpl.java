package com.green.board.service;

import com.green.board.dto.ReplyDTO;
import com.green.board.mapper.ReplyMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class ReplyServiceImpl implements ReplyService{
  private ReplyMapper replyMapper;

  public ReplyServiceImpl(ReplyMapper replyMapper){
    this.replyMapper = replyMapper;
  }

  //댓글 목록 조회 기능
  @Override
  public List<ReplyDTO> selectBoardReplyList(int boardNum) {
    return replyMapper.selectBoardReplyList(boardNum);
  }

  //댓글 작성 기능
  @Override
  public void insertBoardReply(ReplyDTO replyDTO) {
    replyMapper.insertBoardReply(replyDTO);
  }

  //댓글 삭제 기능
  @Override
  public void deleteBoardReply(int replyNum) {
    replyMapper.deleteBoardReply(replyNum);
  }
}
