package com.green.member_manager.service;

import com.green.member_manager.dto.MemberDTO;

import java.util.List;

//핵심 기능(쿼리 기능)을 메서드로 정의
public interface MemberService {

  //회원 목록 조회 기능
  public List<MemberDTO> selectMemberList();

  //회원 상세 정보 조회 기능
  public MemberDTO findMemberByMemId(String memId);

  //회원 등록 기능
  public int insertMember(MemberDTO memberDTO);

  //회원 삭제 기능
  public void deleteMember(String memId);

  //회원 수정 기능
  public void updateMember(MemberDTO memberDTO);

}
