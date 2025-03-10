package com.green.board.mapper;

import com.green.board.dto.BoardDTO;
import com.green.board.dto.ReplyDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReplyMapper {
  //댓글 목록 조회 쿼리
  public List<ReplyDTO> selectBoardReplyList(int boardNum);

  //댓글 작성 쿼리
  public void insertBoardReply(ReplyDTO replyDTO);

  //댓글 삭제 쿼리
  public void deleteBoardReply(int replyNum);



}
