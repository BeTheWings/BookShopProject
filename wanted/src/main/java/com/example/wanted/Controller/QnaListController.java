package com.example.wanted.Controller;

import com.example.wanted.Service.QnaListService;
import com.example.wanted.Vo.QnaInfores;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.util.HashMap;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class QnaListController {
    private static final Logger logger = LoggerFactory.getLogger(QnaListController.class);

    @Autowired
    private QnaListService qnaListService;

    @RequestMapping(value="/info/qnaList",method = RequestMethod.GET)
    @ResponseBody
    public List<QnaInfores> getQnaList(@RequestParam int page, @RequestParam int size){
        logger.info("qnaList");
        return qnaListService.findAllQnaInfo(page,size);
    }

    @RequestMapping(value="/info/qnaContent",method = RequestMethod.POST)
    @ResponseBody
    public String getQnaContent(@RequestBody HashMap<String,String> params){


        return qnaListService.saveqnaContent(params);
    }
}
