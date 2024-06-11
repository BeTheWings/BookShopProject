package com.example.wanted.Controller;

import com.example.wanted.Service.QnaListService;
import com.example.wanted.Vo.QnaInfores;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class QnaListController {
    private static final Logger logger = LoggerFactory.getLogger(QnaListController.class);

    @Autowired
    private QnaListService qnaListService;

    @RequestMapping(value="/qnaList",method = RequestMethod.GET)
    @ResponseBody
    public List<QnaInfores> getQnaList(){
        logger.info("qnaList");
        return qnaListService.findAllQnaInfo();
    }
}
