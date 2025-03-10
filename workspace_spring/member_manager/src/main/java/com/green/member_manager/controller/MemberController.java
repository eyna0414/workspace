package com.green.member_manager.controller;

import com.green.member_manager.dto.MemberDTO;
import com.green.member_manager.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/members")
public class MemberController {
  private MemberService memberService;

  public MemberController(MemberService memberService){
    this.memberService = memberService;
  }

  //회원 목록 조회 rest api
  //localhost:8080/members = localhost:8080/members/
  // / : 권장하지 않음
  @GetMapping("")
  public List<MemberDTO> getMemberList(){
    log.info("회원 목록 조회 시작");

    //회원 목록 조회
    return memberService.selectMemberList();

  }

  //회원 상세 정보 조회 rest api
  //(get)localhost:8080/members/java
  @GetMapping("/{memId}")
  public MemberDTO getMember(@PathVariable("memId") String memId){
    return memberService.findMemberByMemId(memId);
  }

  //회원 등록 rest api
  @PostMapping("")
  public int regMember(@RequestBody MemberDTO memberDTO){
    return memberService.insertMember(memberDTO);
  }

  //회원 삭제 rest api
  @DeleteMapping("/{memId}")
  public void deleteMember(@PathVariable("memId") String memId){
    memberService.deleteMember(memId);
  }

  //회원 수정 rest api
  @PutMapping("/{memId}")
  public void updateMember(@PathVariable("memId") String memId, @RequestBody MemberDTO memberDTO){
    memberDTO.setMemId(memId);
    memberService.updateMember(memberDTO);
  }

}
