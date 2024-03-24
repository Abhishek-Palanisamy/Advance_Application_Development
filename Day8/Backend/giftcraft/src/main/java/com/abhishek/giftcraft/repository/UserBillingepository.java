package com.abhishek.giftcraft.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhishek.giftcraft.entity.UserBilling;

public interface UserBillingepository extends JpaRepository<UserBilling,Integer> {
    
}
