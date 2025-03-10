package com.green.member_manager.service;

import com.green.member_manager.dto.MemberDTO;
import com.green.member_manager.mapper.MemberMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
//MemberServiceImpl memberServiceImpl = new MemberServiceImpl(); 생성자호출
@Service //객체생성 어노테이션 : 생성자호출 대신 생성 spring에서
//MemberManagerService에서 선언한 메서드를 구현
public class MemberServiceImpl implements MemberService {
  private MemberMapper memberMapper;

  @Autowired //생략가능
  public MemberServiceImpl(MemberMapper memberMapper){
    this.memberMapper = memberMapper;
  }

  //회원 목록 조회 기능
  @Override
  public List<MemberDTO> selectMemberList() {
    //객체명.메서드명(); -쿼리를 실행
    //return : 쿼리를 받아서 실행
    return memberMapper.selectMemberList();
  }

  //회원 상세 정보 기능
  @Override
  public MemberDTO findMemberByMemId(String memId) {
    return memberMapper.findMemberByMemId(memId);
  }

  //회원 등록 기능
  @Override
  public int insertMember(MemberDTO memberDTO) {
    return memberMapper.insertMember(memberDTO);
  }

  //회원 삭제 기능
  @Override
  public void deleteMember(String memId) {
    memberMapper.deleteMember(memId);
  }

  //회원 수정 기능
  @Override
  public void updateMember(MemberDTO memberDTO) {
    memberMapper.updateMember(memberDTO);
  }


}
