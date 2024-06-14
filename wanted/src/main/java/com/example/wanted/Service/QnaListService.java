package com.example.wanted.Service;

import com.example.wanted.Dao.QnaInfoDao;
import com.example.wanted.Vo.QnaInfores;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class QnaListService {

    @Autowired
    private QnaInfoDao qnaInfoDao;
    private QnaInfores qnaInfores;

    private static final Logger logger = LoggerFactory.getLogger(QnaListService.class);


    public List<QnaInfores> findAllQnaInfo(int page,int size) {
        //JPA로 Paging 및 orderby를 지원하는 Pageable
        Pageable pageable = PageRequest.of(page,size,Sort.by(Sort.Order.desc("qnaId")));
        Page<QnaInfores> result = qnaInfoDao.findAll(pageable);
        return  result.getContent();
    }

    public String saveqnaContent(HashMap<String, String> params) {
        qnaInfores = new QnaInfores();
        qnaInfores.setTitle(params.get("Title"));
        qnaInfores.setContent(params.get("Content"));
        qnaInfores.setWriter(params.get("Password"));
        String resp = String.valueOf(qnaInfoDao.save(qnaInfores));
        return resp;
    }
}
