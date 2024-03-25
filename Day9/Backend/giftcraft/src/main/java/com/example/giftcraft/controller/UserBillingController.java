package com.example.giftcraft.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.giftcraft.dto.UserBillingDto;
import com.example.giftcraft.entity.UserBilling;
import com.example.giftcraft.service.UserBillingService;


@RestController
@RequestMapping("/auth")
public class UserBillingController {
    @Autowired
    private UserBillingService userBillingService;
    @PostMapping("/user/postuserbilling")
    @PreAuthorize("hasAuthority('USER')")
    public ResponseEntity<UserBilling> addUserBilling(@RequestBody UserBillingDto userBillingDto) {
        UserBilling userBilling = userBillingService.addUserBilling(userBillingDto);
        return new ResponseEntity<>(userBilling, HttpStatus.CREATED);
    }

    @GetMapping("/admin/alluserbilling")
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<UserBilling> getAllBillings() {
        return userBillingService.getBillings();

    }

    @GetMapping("/admin/getuserbilling/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<UserBilling> getUserBillingById(@PathVariable int id) {
        UserBilling userBilling = userBillingService.getUserBilling(id);
        return new ResponseEntity<>(userBilling, HttpStatus.OK);
    }

    @DeleteMapping("/admin/delete/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<String> deleteUserBilling(@PathVariable int id) {
        String message = userBillingService.delUserBilling(id);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    
}
