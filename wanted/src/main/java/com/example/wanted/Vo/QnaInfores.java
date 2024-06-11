package com.example.wanted.Vo;

import lombok.Builder;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import javax.persistence.*;

@Table(name="qna_Info")
@Getter
@Setter
@Entity
public class QnaInfores extends BaseTimeEntity{
    @Id@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long qnaId;

    @NonNull
    @Column(unique = false,length = 100)
    private String title;

    @NonNull
    @Column(unique = false,length = 500)
    private String content;

    @NonNull
    @Column(unique = false,length = 50)
    private String writer;

}
