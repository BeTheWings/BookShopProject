package com.example.wanted.Service;

import com.example.wanted.Dao.SlideInfoDao;
import com.example.wanted.Dao.UserDao;
import com.example.wanted.Vo.SlideInfores;
import com.example.wanted.Vo.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class WantedMainService {


    private UserDao userDao;
    private Users users;
    @Autowired
    private SlideInfoDao slideInfoDao;

    public void getSubjectList() {

        users.setUserName("parkjeesoo");
        userDao.save(users);

    }

    public List<SlideInfores> findSlideListInfo() {

        return slideInfoDao.findAll();
    }
}
