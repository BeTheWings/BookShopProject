package com.example.wanted.Service;

import com.example.wanted.Dao.NoticeInfoDao;
import com.example.wanted.Vo.NoticeInfores;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NoticeListService {

    @Autowired
    private NoticeInfoDao noticeInfoDao;

    private static final Logger logger = LoggerFactory.getLogger(NoticeListService.class);

    public List<NoticeInfores> findAllNoticeList() {

     return noticeInfoDao.findAll();

    }

    public Optional<NoticeInfores> findOneNoticeInfo(Long noticeId) {

        return noticeInfoDao.findById(noticeId);
    }
}
