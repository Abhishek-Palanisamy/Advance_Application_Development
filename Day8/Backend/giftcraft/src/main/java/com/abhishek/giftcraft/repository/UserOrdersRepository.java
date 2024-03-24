package com.abhishek.giftcraft.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhishek.giftcraft.entity.UserOrders;

public interface UserOrdersRepository extends JpaRepository<UserOrders,Integer>{
    
}
