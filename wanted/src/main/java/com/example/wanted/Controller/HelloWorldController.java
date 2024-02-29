package com.example.wanted.Controller;

import com.example.wanted.Dto.UserDao;
import com.example.wanted.Service.WantedMainService;
import com.example.wanted.Vo.Users;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
;
@Controller
@RequiredArgsConstructor
@RequestMapping("/api")
public class HelloWorldController {

    private static final Logger logger = LoggerFactory.getLogger(HelloWorldController.class);

    @Autowired
    private WantedMainService wantedMainService;
    private final UserDao userDao;
   @GetMapping(value="/test")
   @ResponseBody
    public String hello(){
        Users users = new Users();
        String name = "";
        users.setUserName("parkjeesoo");
    //    userDao.save(users);
   //     wantedMainService.getSubjectList();
       logger.info("viewName"+"test");
        return "index";
    }

    @GetMapping(value="/login")
    @ResponseBody
    public String loginPage(){


       return "login";
    }


    @ResponseBody
    @PostMapping(value="/testData")
    public Map<String,String> testData(@RequestBody List<String> params){
        Map<String,String> data = new HashMap<>();
        data.put("1","사과");
        data.put("2","포도");
        data.put("3","바나나");

        int i =4;
        for(String param : params){
            data.put(Integer.toString(i),param);
            logger.info("viewName"+data);
            i++;
        }


        return data;
    }


}
