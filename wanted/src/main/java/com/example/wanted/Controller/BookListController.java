package com.example.wanted.Controller;


import com.example.wanted.Service.BookListService;
import com.example.wanted.Vo.BookInfores;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

//Controller 선언
@Controller
@RequiredArgsConstructor

public class BookListController {
    private static final Logger logger = LoggerFactory.getLogger(BookListController.class);

    @Autowired
    private BookListService bookListService;

    //클래스명 변경 필요 board -> bookInfo로
    @RequestMapping(value="/bookList",method = RequestMethod.GET)
    @ResponseBody
    public List<BookInfores> getBookList(){
        logger.info("bookList");
        List<BookInfores> testInfoList = new ArrayList<>();
        BookInfores testInfo = new BookInfores();
        testInfo.setAuthor("박종수");
        testInfo.setCategory("역사");
        testInfo.setPrice(10000000);
        testInfo.setTitle("역사알아가기");
        testInfoList.add(testInfo);
        //return testInfoList;
        return bookListService.findAllBookInfo();
    }
    @RequestMapping(value="/bookList/bookInfo",method = RequestMethod.GET)
    @ResponseBody
    public Optional<BookInfores> getBookInfo(@RequestParam(value="bookId") Long bookId){
        logger.info("bookInfo"+bookId);
        //return testInfoList;
        return bookListService.findOneBookInfo(bookId);
    }
}
