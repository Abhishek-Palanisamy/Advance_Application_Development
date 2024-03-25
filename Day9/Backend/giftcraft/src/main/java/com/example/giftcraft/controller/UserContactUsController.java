package com.example.giftcraft.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.giftcraft.dto.UserContactUsDto;
import com.example.giftcraft.entity.UserContactUs;
import com.example.giftcraft.service.UserContactUsService;



@RestController
@RequestMapping("/auth")
public class UserContactUsController {
    @Autowired
    private UserContactUsService userContactUsService;
    
    @PostMapping("/user/postusercontact")
    @PreAuthorize("hasAuthority('USER')")

    public ResponseEntity<UserContactUs> addContactUs(@RequestBody UserContactUsDto userContactUsDto) {
        UserContactUs userContactUs = userContactUsService.addContactUs(userContactUsDto);
        return new ResponseEntity<>(userContactUs, HttpStatus.CREATED);
    }

    @GetMapping("/admin/getusercontact")
    @PreAuthorize("hasAuthority('ADMIN')")

    public List<UserContactUs> getAllUserContactUs() {
        return userContactUsService.getUserContactUs();

    }
    
    
}
