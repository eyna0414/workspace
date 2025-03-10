package com.green.book_shop.book.service;

import com.green.book_shop.book.mapper.BookMapper;
import com.green.book_shop.book.dto.BookCategoryDTO;
import com.green.book_shop.book.dto.BookDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {
  private final BookMapper bookMapper;


  // 책 등록 기능
  @Override
  public void insertBook(BookDTO bookDTO) {
    bookMapper.insertBook(bookDTO);
  }

  // 카테고리 목록 조회 기능
  @Override
  public List<BookCategoryDTO> selectCategoryList() {
    return bookMapper.selectCategoryList();
  }

  // 카테고리 등록 기능
  @Override
  public int insertCategory(String cateName) {
    int result = 0;
    //카테고리 명이 중복인지 확인한다.
    //cataName이 null 이면 사용가능한 카테고리명
    //cataName이 null이 아니면 사용 불가능한 카테고리명
    String selectedCateName = bookMapper.isUsableCateName(cateName);

    //만약 중복이 아니면 카테고리를 등록한다.
    if(selectedCateName == null){
      //카테고리 등록 실행
      result=bookMapper.insertCategory(cateName);
    }

    return result;
  }
  //카테고리 삭제 기능

  @Override
  public void deleteCategory(int cateCode) {
    bookMapper.deleteCategory((cateCode));
  }

  //카테고리 수정 기능
  @Override
  public void updateCategory(BookCategoryDTO bookCategoryDTO) {
    bookMapper.updateCategory(bookCategoryDTO);
  }




}
