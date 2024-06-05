package com.example.wanted.Service;

import com.example.wanted.Controller.BookListController;
import com.example.wanted.Dao.BookInfoDao;
import com.example.wanted.Vo.BookInfores;
import io.micrometer.core.instrument.util.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookListService {

    @Autowired
    private BookInfoDao bookInfoDao;

    private static final Logger logger = LoggerFactory.getLogger(BookListController.class);

    public List<BookInfores> findAllBookInfo() {

     return bookInfoDao.findAll();

    }
}
