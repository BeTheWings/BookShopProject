package com.example.wanted.Vo;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;

import javax.persistence.*;

@Table(name="slide_info")
@Getter
@Setter
@Entity
public class SlideInfores {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long slideId;

    @NonNull
    @Column(unique = false,length=500)
    private String imgLocation;

    @NonNull
    @Column(unique = false,length=500)
    private String link;

    @NonNull
    @Column(unique = false,length=500)
    private String css;
}
