package com.example.wanted.Service;

import com.example.wanted.Dao.UserDao;
import com.example.wanted.Vo.Users;
import org.springframework.stereotype.Service;


@Service
public class WantedMainService {

    private UserDao userDao;
    private Users users;
    public void getSubjectList() {

        users.setUserName("parkjeesoo");
        userDao.save(users);

    }

}
