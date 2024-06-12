package com.example.wanted.Dao;

import com.example.wanted.Vo.SlideInfores;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SlideInfoDao extends JpaRepository<SlideInfores,Long> {
}
