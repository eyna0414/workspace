package com.green.member_manager.mapper;

import com.green.member_manager.dto.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
//xml파일과 연결할 Mapper interface 파일명을 패키지를 포함
//여기에 REACT_MEMBER 테이블의
@Mapper //객체 생성 + 이 인터페이스에 쿼리 실행 메서드가 있음을 인지!
public interface MemberMapper {

  //회원 목록 조회 쿼리
  public List<MemberDTO> selectMemberList();

  //회원 상제 정보 조회 쿼리
  public MemberDTO findMemberByMemId(String memId);

  //회원 등록 쿼리
  public int insertMember(MemberDTO memberDTO);

  //회원 삭제 쿼리
  public void deleteMember(String memId);

  //회원 수정 쿼리
  public void updateMember(MemberDTO memberDTO);

}
