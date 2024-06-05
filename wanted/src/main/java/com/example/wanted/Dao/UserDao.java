package com.example.wanted.Dao;

import com.example.wanted.Vo.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<Users,Long> {
}
