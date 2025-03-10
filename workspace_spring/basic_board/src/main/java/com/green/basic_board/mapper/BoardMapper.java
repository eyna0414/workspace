package com.green.basic_board.mapper;

import com.green.basic_board.dto.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

//해당 interface가 board-mapper.xml 파일에 작성한 쿼리를 실행하는 인터페이스
//쿼리를 실행하는 interface는 @Mapper 어노테이션을 사용해야 한다. -상세내용 스프링 5.pdf파일
//@Mapper 어노테이션이 붙은 인터페이스를 쿼리 실행 메서드가 존재하는 파일임을 인지
//해당 mapper 인터페이스와 연결된 xml 파일에 있는 namespace 부분에 연결할
//인터페이스명은 패키지까지 포함해서 작성한다.
//위에 있는 패키지명 복사해서  xml 파일에 가서 namespace에 붙여주고 인터페이스명까지 풀로 적어준다.

//인터페이스는 xml에서 만든 내용들을 실행시켜주기 위해서 만들어주는 것이다.

@Mapper//spring.io에서 파일 만들때 mybatis에서 제공하는 인터페이스임 내용-스프링 16.pdf파일
public interface BoardMapper {
  /*
  1.추상 메서드 이름은 xml 파일에서 작성한 실행시킬 쿼리 id와 무조건 동일해야한다.
  2.메서드의 매개변수는 실행할 쿼리의 빈 값을 채울 용도로 사용.
  3.메서드의 리턴 타입은 쿼리 실행 결과 전체를 자바로 가져올 수 있는 자료형으로 선언!!
   */
  //게시글 목록 조회 쿼리를 실행시킬 메서드
   public List<BoardDTO> selectBoardlist();

   //하나의 게시글 정보를 조회하는 쿼리를 실행시킬 메서드
   public BoardDTO getBoard(int boardNum);

   //게시글 등록 쿼리 실행 메서드
   public int insertBoard(BoardDTO boardDTO);

   //-----------------------------------------//
   public int selectReadCnt(int boardNum);

   public List<String> getTitles(int readCnt);

   public List<String> b(String title);

   public List<String> d(BoardDTO boardDTO);

   public BoardDTO c(int boardNum);

   public List<BoardDTO> selectBoardList();

}
