package com.example.giftcraft.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.giftcraft.entity.UserBilling;


public interface UserBillingepository extends JpaRepository<UserBilling,Integer> {
    
}
