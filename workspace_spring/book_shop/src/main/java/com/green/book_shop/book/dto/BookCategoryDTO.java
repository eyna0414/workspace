package com.green.book_shop.book.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class BookCategoryDTO {

  private int cateCode;
  private String cateName;

  public int getCateCode() {
    return cateCode;
  }

  public void setCateCode(int cateCode) {
    this.cateCode = cateCode;
  }

  public String getCateName() {
    return cateName;
  }

  public void setCateName(String cateName) {
    this.cateName = cateName;
  }
}
