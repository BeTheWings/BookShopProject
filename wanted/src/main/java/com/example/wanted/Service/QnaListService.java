package com.example.wanted.Service;

import com.example.wanted.Dao.QnaInfoDao;
import com.example.wanted.Vo.QnaInfores;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QnaListService {

    @Autowired
    private QnaInfoDao qnaInfoDao;
    private static final Logger logger = LoggerFactory.getLogger(QnaListService.class);


    public List<QnaInfores> findAllQnaInfo() {

        return qnaInfoDao.findAll();
    }
}
