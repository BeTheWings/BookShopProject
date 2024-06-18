package com.example.wanted.Controller;


import com.example.wanted.Service.NoticeListService;
import com.example.wanted.Vo.NoticeInfores;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Optional;

//Controller 선언
@Controller
@RequiredArgsConstructor

public class NoticeListController {
    private static final Logger logger = LoggerFactory.getLogger(NoticeListController.class);

    @Autowired
    private NoticeListService noticeListService;

    //클래스명 변경 필요 board -> bookInfo로
    @RequestMapping(value="/info/noticeList",method = RequestMethod.GET)
    @ResponseBody
    public List<NoticeInfores> getBookList(){
        logger.info("noticeList");
        //return testInfoList;
        return noticeListService.findAllNoticeList();
    }
    @RequestMapping(value="/info/noticeList/noticeDetail",method = RequestMethod.GET)
    @ResponseBody
    public Optional<NoticeInfores> getBookInfo(@RequestParam(value="noticeId") Long noticeId){
        logger.info("noticeDetail"+noticeId);
        //return testInfoList;
        return noticeListService.findOneNoticeInfo(noticeId);
    }
}
