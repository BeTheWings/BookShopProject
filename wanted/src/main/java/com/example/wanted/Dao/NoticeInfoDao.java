package com.example.wanted.Dao;

import com.example.wanted.Vo.BookInfores;
import com.example.wanted.Vo.NoticeInfores;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoticeInfoDao extends JpaRepository<NoticeInfores,Long> {
}
