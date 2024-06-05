package com.example.wanted.Vo;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="book_Info")
@Getter
//추후에 setter는 DTO로 옮겨야한다.
@Setter
public class BookInfores {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookId;
    @NonNull
    @Column(unique = false,length=100)
    private String title;
    @NonNull
    @Column(unique = false,length=50)
    private String author;
    @NonNull
    @Column(unique = false,length=50)
    private String publisher;
    @NonNull
    @Column(unique = false,length=300)
    private String description;
    @NonNull
    @Column(unique = false,length=50)
    private String category;
    @NonNull
    @Column(unique = false,length=50)
    private String language;
    @NonNull
    @Column(unique = false,length=50)
    private int price;
}
