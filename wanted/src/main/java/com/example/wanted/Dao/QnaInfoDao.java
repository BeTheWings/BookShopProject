package com.example.wanted.Dao;

import com.example.wanted.Vo.BookInfores;
import com.example.wanted.Vo.QnaInfores;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QnaInfoDao   extends JpaRepository<QnaInfores,Long>{
}
