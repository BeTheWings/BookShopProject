package com.example.wanted.Dao;

import com.example.wanted.Vo.BookInfores;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookInfoDao extends JpaRepository<BookInfores,Long> {
}
