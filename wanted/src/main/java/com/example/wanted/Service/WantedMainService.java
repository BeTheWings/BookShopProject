package com.example.wanted.Service;

import com.example.wanted.Dto.UserDao;
import com.example.wanted.Vo.Users;
import org.apache.catalina.User;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;


@Service
public class WantedMainService {

    private UserDao userDao;
    private Users users;
    public void getSubjectList() {

        users.setUserName("parkjeesoo");
        userDao.save(users);

    }

}
