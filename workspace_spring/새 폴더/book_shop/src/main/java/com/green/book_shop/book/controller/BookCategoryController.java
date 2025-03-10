package com.green.book_shop.book.controller;

import com.green.book_shop.book.dto.BookDTO;
import com.green.book_shop.book.service.BookService;
import com.green.book_shop.book.dto.BookCategoryDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/categories")
public class BookCategoryController {
  private final BookService bookService;


  // 카테고리 목록 조회 rest api
  @GetMapping("")
  public List<BookCategoryDTO> getCateList(){
    return bookService.selectCategoryList();
  }

  //카테고리 등록 rest api
  @PostMapping("")
  public int insertCategory(@RequestBody BookCategoryDTO bookCategoryDTO){
    //넘어오는 객체의 키와 매개변수에 작성한 DTO 클래스의 변수가 일치
    //등록 성공 -> 1 리턴
    //등록 안했으면 -> 0 리턴
    return bookService.insertCategory(bookCategoryDTO.getCateName());
  }

  //카테고리 삭제 rest api
  @DeleteMapping("/{cateCode}")
  public void deleteCategory(@PathVariable("cateCode") int cateCode){
    bookService.deleteCategory(cateCode);
  }

  //카테고리 수정 rest api
  @PutMapping("/{cateCode}")
  public void updateCategory(@PathVariable("cateCode") int cateCode, @RequestBody BookCategoryDTO bookCategoryDTO){
    bookCategoryDTO.setCateCode(cateCode);
    bookService.updateCategory(bookCategoryDTO);
  }



}
