package com.green.book_shop.book.service;

import com.green.book_shop.book.dto.BookCategoryDTO;
import com.green.book_shop.book.dto.BookDTO;

import java.util.List;

public interface BookService {
  //책 등록 기능
  public void insertBook(BookDTO bookDTO);

  // 카테고리 목록 조회 기능
  public List<BookCategoryDTO> selectCategoryList ();

  //카테고리 등록 기능
  public int insertCategory(String cateName);

  //카테고리 삭제 쿼리
  public void deleteCategory(int cateCode);

  //카데고리 수정 쿼리
  public void updateCategory(BookCategoryDTO bookCategoryDTO);
}
