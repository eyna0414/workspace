package study;

import java.util.Arrays;

public class Song {
  String title;
  String artist;
  String album;
  int year;
  String[] composer;

//  public void setTitle(String title1){
//    title = title1;
//  }
//
//  public void setArtist(String artist1){
//    artist = artist1;
//  }
//
//  public void setAlbum(String album1){
//    album = album1;
//  }
//
//  public void setYear(int year1){
//    year = year1;
//  }
//
//  public void setComposer(String[] composer1){
//    composer = composer1;
//  }

  public void initSong(String title, String artist, String album, int year, String[] composer) {
    this.title = "Title";
    this.artist = "Artist";
    this.album = "Album";
    this.year = 0;
    this.composer = composer;
  }


  public void printAll(){
    System.out.println("title : " + title);
    System.out.println("artist : " + artist);
    System.out.println("album : " + album);
    System.out.println("year : " + year);
    System.out.println("composer : " + composer);
  }

}
