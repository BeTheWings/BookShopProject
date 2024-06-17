package com.example.wanted.Vo;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name="noticeInfo")
@Getter
//추후에 setter는 DTO로 옮겨야한다.
@Setter
public class NoticeInfores extends BaseTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long noticeId;
    @NonNull
    @Column(unique = false,length=100)
    private String title;
    @NonNull
    @Column(unique = false,length=1000)
    private String content;
    @NonNull
    @Column(unique = false,length=50)
    private String writer;
    @NonNull
    @Column(unique = false,length=50)
    private String language;

}
