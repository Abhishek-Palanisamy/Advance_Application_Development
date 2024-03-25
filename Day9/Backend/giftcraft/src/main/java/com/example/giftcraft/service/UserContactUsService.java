package com.example.giftcraft.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.giftcraft.dto.UserContactUsDto;
import com.example.giftcraft.entity.UserContactUs;
import com.example.giftcraft.repository.UserContactUsRepository;


@Service
public class UserContactUsService {
    @Autowired
    private UserContactUsRepository userContactUsRepository;

    public UserContactUs addContactUs(UserContactUsDto userContactUsDto){
        UserContactUs userContactUs=new UserContactUs();
        userContactUs.setFirstname(userContactUsDto.getFirstname());
        userContactUs.setEmailid(userContactUsDto.getEmailid());
        userContactUs.setMobile(userContactUsDto.getMobile());
        userContactUs.setQuery(userContactUsDto.getQuery());
        userContactUs.setSubject(userContactUsDto.getSubject());
        userContactUsRepository.save(userContactUs);
        return userContactUs;
    }
      public List<UserContactUs> getUserContactUs() {
        return userContactUsRepository.findAll();
    }

    
}
